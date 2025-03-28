import express from 'express';
import apiRoutes from './routes/api';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
const corsOptions = {
  origin: [
    'https://christcenteredbaptist.com',
    'http://localhost:3001'
  ]
};

app.use(cors(corsOptions));

// Logging middleware
app.use(morgan('dev'));
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
