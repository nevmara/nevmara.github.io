import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const imagesDir = path.join(projectRoot, 'images');
const entries = await fs.readdir(imagesDir, { withFileTypes: true });

const excludedFromWebp = new Set([
  'apple-touch-icon.png',
  'logo.png',
  'icon-192.png',
  'icon-512.png'
]);

const imageFiles = entries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => /\.(png|jpe?g)$/i.test(name))
  .filter((name) => !excludedFromWebp.has(name.toLowerCase()));

for (const fileName of imageFiles) {
  const sourcePath = path.join(imagesDir, fileName);
  const targetPath = path.join(imagesDir, `${path.parse(fileName).name}.webp`);

  await sharp(sourcePath)
    .webp({ quality: 90, effort: 6 })
    .toFile(targetPath);
}

// Generate PWA icons from logo.svg
const logoSource = path.join(projectRoot, 'logo.svg');
await sharp(logoSource).resize(192, 192).png().toFile(path.join(imagesDir, 'icon-192.png'));
await sharp(logoSource).resize(512, 512).png().toFile(path.join(imagesDir, 'icon-512.png'));

// Generate root favicon.ico (48x48 embedded PNG in standard ICO format)
const png48 = await sharp(logoSource).resize(48, 48).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // ICO type 1
icoHeader.writeUInt16LE(1, 4); // 1 image
icoHeader.writeUInt8(48, 6);   // width
icoHeader.writeUInt8(48, 7);   // height
icoHeader.writeUInt8(0, 8);    // color count
icoHeader.writeUInt8(0, 9);    // reserved
icoHeader.writeUInt16LE(1, 10); // color planes
icoHeader.writeUInt16LE(32, 12); // bits per pixel
icoHeader.writeUInt32LE(png48.length, 14); // image data size
icoHeader.writeUInt32LE(22, 18); // offset where image data starts
const icoBuffer = Buffer.concat([icoHeader, png48]);
await fs.writeFile(path.join(projectRoot, 'favicon.ico'), icoBuffer);
console.log('Build images completed successfully.');