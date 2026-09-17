import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '../');
const srcDir = path.join(rootDir, 'src');
const indexHtmlPath = path.join(rootDir, 'index.html');

const excludedFiles = ['favicon.png', 'favicon-192.png', 'social_share.png'];

async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    let newContent = content;

    // Use a regex to match .png, .jpg, .jpeg
    // We match any character that is not a slash or quote before the extension to get the filename
    const regex = /([^/\\"'`\s]+)\.(png|jpg|jpeg)/gi;
    
    newContent = newContent.replace(regex, (match, p1, p2) => {
      const fileName = `${p1}.${p2}`;
      if (excludedFiles.includes(fileName.toLowerCase())) {
        return match;
      }
      return `${p1}.webp`;
    });

    if (content !== newContent) {
      await fs.writeFile(filePath, newContent, 'utf-8');
      console.log(`Updated references in: ${path.relative(rootDir, filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

async function processDirectory(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();
      if (['.js', '.jsx', '.ts', '.tsx', '.css'].includes(ext)) {
        await processFile(fullPath);
      }
    }
  }
}

console.log('Starting reference updates...');
async function run() {
  await processDirectory(srcDir);
  await processFile(indexHtmlPath);
  console.log('Reference updates complete.');
}

run().catch(console.error);
