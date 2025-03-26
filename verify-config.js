// Test script to verify Vercel build configuration
const fs = require('fs');
const path = require('path');

console.log('Verifying Vercel build configuration...');

// Check for required files
const requiredFiles = [
  'vercel.json',
  'api/index.js',
  'vercel-build.js'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.error(`Missing required file: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✓ Found ${file}`);
  }
}

// Check client and server directories
if (!fs.existsSync(path.join(__dirname, 'client'))) {
  console.error('Missing client directory');
  allFilesExist = false;
} else {
  console.log('✓ Found client directory');
}

if (!fs.existsSync(path.join(__dirname, 'server'))) {
  console.error('Missing server directory');
  allFilesExist = false;
} else {
  console.log('✓ Found server directory');
}

// Verify package.json files
if (fs.existsSync(path.join(__dirname, 'client/package.json'))) {
  console.log('✓ Found client/package.json');
} else {
  console.error('Missing client/package.json');
  allFilesExist = false;
}

if (fs.existsSync(path.join(__dirname, 'server/package.json'))) {
  console.log('✓ Found server/package.json');
} else {
  console.error('Missing server/package.json');
  allFilesExist = false;
}

if (allFilesExist) {
  console.log('\n✅ All required files are present. Configuration is valid.');
  console.log('The project is ready for Vercel deployment.');
} else {
  console.error('\n❌ Some required files are missing. Please fix the issues before deploying.');
}
