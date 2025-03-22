# Deployment Guide for Christ Centered Baptist Website

This document provides instructions for deploying the Christ Centered Baptist website to production.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Access to your domain registrar for christcenteredbaptist.com
- Twitter/X API credentials (if using X integration)

## Build Process

1. Clone the repository to your production server
2. Navigate to the project root directory
3. Run the build script:
   ```
   node build.js
   ```
   This will build both the client and server applications.

## Configuration

1. Update the server/.env.production file with your Twitter/X API credentials:
   ```
   TWITTER_API_KEY=your_api_key
   TWITTER_API_SECRET=your_api_secret
   TWITTER_ACCESS_TOKEN=your_access_token
   TWITTER_ACCESS_SECRET=your_access_secret
   ```

2. Configure your web server (Nginx, Apache, etc.) to:
   - Serve static files from the client/build directory
   - Proxy API requests to the Node.js server running on PORT 5001

## Starting the Application

1. Start the Node.js server:
   ```
   cd server
   npm start
   ```

2. For production environments, it's recommended to use a process manager like PM2:
   ```
   npm install -g pm2
   pm2 start dist/index.js --name christcenteredbaptist
   ```

## Domain Configuration

1. Point your christcenteredbaptist.com domain to your server's IP address
2. Configure SSL certificates for secure HTTPS connections

## Maintenance

- Monitor server logs for any errors
- Regularly backup your data
- Keep dependencies updated

## Troubleshooting

If you encounter issues during deployment:
1. Check server logs for error messages
2. Verify all environment variables are correctly set
3. Ensure the server has proper permissions to access required files
4. Confirm network settings allow traffic on the configured port
