#!/bin/bash

# Vercel Deployment Script for Christ Centered Baptist Website
# This script automates the deployment process to Vercel

echo "Starting Vercel deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Copy Vercel configuration files to project root
echo "Setting up Vercel configuration files..."
cp -r vercel-build/* .

# Install dependencies and build the project
echo "Building project..."
node build.js

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment process completed!"
