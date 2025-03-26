// Modified build script for Vercel deployment
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

console.log('Starting Vercel build process...');

// Build client (React frontend)
console.log('\n--- Building client (React frontend) ---');
try {
  process.chdir(path.join(__dirname, 'client'));
  console.log('Installing client dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('Building client...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Client build successful!');
} catch (error) {
  console.error('Error building client:', error.message);
  process.exit(1);
}

// Build server (Node.js backend)
console.log('\n--- Building server (Node.js backend) ---');
try {
  process.chdir(path.join(__dirname, 'server'));
  console.log('Installing server dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('Building server...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Server build successful!');
  
  // Create api directory for Vercel serverless functions if it doesn't exist
  const apiDir = path.join(__dirname, 'api');
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }
  
  // Copy the serverless function handler
  if (fs.existsSync(path.join(__dirname, 'vercel-build', 'api', 'index.js'))) {
    fs.copyFileSync(
      path.join(__dirname, 'vercel-build', 'api', 'index.js'),
      path.join(apiDir, 'index.js')
    );
  }
  
} catch (error) {
  console.error('Error building server:', error.message);
  process.exit(1);
}

// Copy Vercel configuration file to project root
try {
  if (fs.existsSync(path.join(__dirname, 'vercel-build', 'vercel.json'))) {
    fs.copyFileSync(
      path.join(__dirname, 'vercel-build', 'vercel.json'),
      path.join(__dirname, 'vercel.json')
    );
  }
} catch (error) {
  console.error('Error copying Vercel configuration:', error.message);
}

console.log('\n--- Vercel build completed successfully! ---');
console.log('The application is ready for deployment to Vercel.');
