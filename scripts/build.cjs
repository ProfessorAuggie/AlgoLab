const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('Building for production...');

// Clean dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy root static files
const rootFiles = ['index.html', 'favicon.svg', 'apple-touch-icon.png', 'og.png', 'vercel.json'];
for (const file of rootFiles) {
  const p = path.join(rootDir, file);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(distDir, file));
    console.log(`Copied ${file} -> dist/`);
  }
}

// Copy assets
copyRecursive(path.join(rootDir, 'assets'), path.join(distDir, 'assets'));
console.log('Copied assets/ -> dist/assets/');

console.log('Build completed successfully!');

