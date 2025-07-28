#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Check if we're in a git repository
try {
  execSync('git rev-parse --git-dir', { stdio: 'ignore' });
} catch (error) {
  console.log('❌ Not in a git repository. Please initialize git first.');
  process.exit(1);
}

// Check if gh-pages is installed
try {
  execSync('npm list gh-pages', { stdio: 'ignore' });
} catch (error) {
  console.log('📦 Installing gh-pages...');
  execSync('npm install -D gh-pages', { stdio: 'inherit' });
}

// Build the project
console.log('🔨 Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build failed!');
  process.exit(1);
}

// Deploy to GitHub Pages
console.log('🚀 Deploying to GitHub Pages...');
try {
  execSync('npm run deploy', { stdio: 'inherit' });
  console.log('🎉 Deployment successful!');
  console.log('🌐 Your portfolio is now live at: https://shahriar0104.github.io/portfolio');
  console.log('');
  console.log('📝 Note: It may take a few minutes for the changes to appear on GitHub Pages.');
} catch (error) {
  console.log('❌ Deployment failed. Please check your git remote and permissions.');
  process.exit(1);
} 