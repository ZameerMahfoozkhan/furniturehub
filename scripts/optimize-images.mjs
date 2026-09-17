import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

const exclusions = ['favicon.png', 'favicon-192.png', 'social_share.png'];

async function processDirectory(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();
      
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        if (exclusions.includes(file.name)) {
          console.log(`Skipping excluded file: ${file.name}`);
          continue;
        }

        const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          console.log(`Converted: ${file.name} -> ${path.basename(webpPath)}`);
          
          // Delete old file
          await fs.unlink(fullPath);
          console.log(`Deleted original: ${file.name}`);
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error);
        }
      }
    }
  }
}

console.log('Starting image optimization...');
processDirectory(publicDir).then(() => {
  console.log('Image optimization complete.');
}).catch(console.error);
