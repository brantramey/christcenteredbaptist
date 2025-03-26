// Serverless function for Vercel API routes
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { parse } = require('url');

// Import routes (these will be created in the build process)
const apiRoutes = require('../server/dist/routes/api').default;

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Create serverless function handler
module.exports = (req, res) => {
  const parsedUrl = parse(req.url, true);
  
  // Handle the request with Express
  const server = createServer((req, res) => {
    // Set the URL on the request object
    req.url = parsedUrl.pathname;
    app(req, res);
  });
  
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
};
