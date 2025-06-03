const { execSync } = require('child_process');

console.log('🚀 Starting Vercel build process for Angular app...');

// Install dependencies
console.log('📦 Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Install Angular CLI locally if needed
console.log('🔧 Ensuring Angular CLI is available...');
try {
  execSync('npx --no-install @angular/cli --version', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Angular CLI not found, installing it...');
  execSync('npm install @angular/cli', { stdio: 'inherit' });
}

// Run the Angular build
console.log('🏗️  Building Angular application...');
execSync('npx @angular/cli build --configuration production', { stdio: 'inherit' });

console.log('✅ Build completed successfully!');
