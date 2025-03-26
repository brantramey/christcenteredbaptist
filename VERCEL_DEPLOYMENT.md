# Vercel Deployment Instructions for Christ Centered Baptist Website

This document provides comprehensive instructions for deploying the Christ Centered Baptist website to Vercel.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)
- [Vercel CLI](https://vercel.com/docs/cli) (install with `npm install -g vercel`)
- A [Vercel account](https://vercel.com/signup)

## Project Structure

The Christ Centered Baptist website is a full-stack application with:
- React TypeScript frontend (client directory)
- Node.js Express TypeScript backend (server directory)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <your-repository-url>
   cd christcenteredbaptist
   ```

2. **Copy Vercel Configuration Files**
   Copy the following files to your project root:
   - `vercel.json` - Main configuration file for Vercel
   - `api/index.js` - Serverless function handler for backend
   - `vercel-build.js` - Modified build script for Vercel deployment

3. **Environment Variables**
   Create a `.env` file in the server directory with your environment variables:
   ```
   PORT=5001
   NODE_ENV=production
   TWITTER_API_KEY=your_api_key
   TWITTER_API_SECRET=your_api_secret
   TWITTER_ACCESS_TOKEN=your_access_token
   TWITTER_ACCESS_SECRET=your_access_secret
   ```

   In Vercel, you'll need to add these as project environment variables in the Vercel dashboard.

## Build and Deployment Process

### Option 1: Using the Automated Script

1. **Make the deployment script executable**
   ```bash
   chmod +x deploy.sh
   ```

2. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

   This script will:
   - Check for Vercel CLI installation
   - Copy configuration files
   - Build the project
   - Deploy to Vercel

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   node vercel-build.js
   ```

2. **Login to Vercel (if not already logged in)**
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## Vercel Configuration Details

The `vercel.json` file configures:
- Build command for both client and server
- Output directory (client/build)
- Framework specification (create-react-app)
- API routes rewrites
- Serverless function runtime (Node.js 18.x)

## Troubleshooting

If you encounter issues during deployment:

1. **Verify Configuration**
   Run the verification script to ensure all required files are present:
   ```bash
   node verify-config.js
   ```

2. **Check Build Logs**
   If the build fails, check the Vercel deployment logs for specific errors.

3. **Environment Variables**
   Ensure all required environment variables are set in the Vercel dashboard.

4. **API Routes**
   If API routes aren't working, verify the serverless function configuration in `api/index.js`.

## Post-Deployment

After successful deployment:

1. **Domain Configuration**
   - Set up your custom domain in the Vercel dashboard
   - Configure DNS settings as instructed by Vercel

2. **SSL/TLS**
   Vercel automatically provisions SSL certificates for your domains.

3. **Monitoring**
   Use Vercel's built-in analytics and monitoring tools to track performance.

## Continuous Deployment

For continuous deployment:

1. **Connect your GitHub repository to Vercel**
2. **Configure automatic deployments** for specific branches
3. **Set up preview deployments** for pull requests

This will ensure your site is automatically deployed whenever changes are pushed to your repository.
