
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const publicDir = path.join(rootDir, 'public');

const dirsToProcess = [srcDir, publicDir];
const extensions = ['.png', '.jpg', '.jpeg'];

async function processDirectory(directory) {
    try {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                await processDirectory(fullPath);
            } else {
                const ext = path.extname(file).toLowerCase();
                if (extensions.includes(ext)) {
                    const newPath = fullPath.replace(ext, '.webp');

                    // Skip if WebP already exists (optional, but good for re-running)
                    if (!fs.existsSync(newPath)) {
                        console.log(`Converting: ${fullPath} -> ${newPath}`);
                        try {
                            await sharp(fullPath)
                                .webp({ quality: 80 })
                                .toFile(newPath);
                        } catch (err) {
                            console.error(`Error converting ${fullPath}:`, err);
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.error(`Error processing directory ${directory}:`, err);
    }
}

async function main() {
    console.log('Starting image conversion...');
    for (const dir of dirsToProcess) {
        if (fs.existsSync(dir)) {
            await processDirectory(dir);
        }
    }
    console.log('Image conversion complete.');
}

main();
