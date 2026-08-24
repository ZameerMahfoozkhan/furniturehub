import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirsToOptimize = [
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'src')
];

const supportedExtensions = ['.jpg', '.jpeg', '.png'];

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedExtensions.includes(ext)) {
        await optimizeImage(fullPath, ext);
      }
    }
  }
}

async function optimizeImage(filePath, ext) {
  const tempPath = filePath + '.tmp';
  
  try {
    const origSize = fs.statSync(filePath).size;
    let pipeline = sharp(filePath);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
    }
    
    await pipeline.toFile(tempPath);
    
    const newSize = fs.statSync(tempPath).size;
    
    // Only keep if it's actually smaller (and not 0 bytes)
    if (newSize < origSize && newSize > 0) {
      fs.renameSync(tempPath, filePath);
      console.log(`Optimized: ${filePath} (${(origSize / 1024).toFixed(2)} KB -> ${(newSize / 1024).toFixed(2)} KB)`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`Skipped: ${filePath} (Optimization didn't reduce size)`);
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  for (const dir of dirsToOptimize) {
    await processDirectory(dir);
  }
  console.log('Done.');
}

main();
