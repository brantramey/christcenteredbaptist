// Production build script for client and server
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting production build process...');

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
} catch (error) {
  console.error('Error building server:', error.message);
  process.exit(1);
}

console.log('\n--- Production build completed successfully! ---');
console.log('The application is ready for deployment.');
