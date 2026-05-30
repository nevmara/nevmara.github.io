import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const imagesDir = path.join(projectRoot, 'images');
const entries = await fs.readdir(imagesDir, { withFileTypes: true });

const imageFiles = entries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => /\.(png|jpe?g)$/i.test(name))
  .filter((name) => !['apple-touch-icon.png', 'logo.png'].includes(name.toLowerCase()));

for (const fileName of imageFiles) {
  const sourcePath = path.join(imagesDir, fileName);
  const targetPath = path.join(imagesDir, `${path.parse(fileName).name}.webp`);

  await sharp(sourcePath)
    .webp({ quality: 90, effort: 6 })
    .toFile(targetPath);
}

const logoSource = path.join(projectRoot, 'logo.svg');
await sharp(logoSource).resize(192, 192).png().toFile(path.join(imagesDir, 'icon-192.png'));
await sharp(logoSource).resize(512, 512).png().toFile(path.join(imagesDir, 'icon-512.png'));