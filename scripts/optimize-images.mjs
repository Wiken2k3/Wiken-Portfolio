import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sources = [path.join(root, 'src', 'assets'), path.join(root, 'public')];
const output = path.join(root, 'public', 'assets');
const manifestFile = path.join(root, 'src', 'data', 'imageManifest.json');
const sizes = [480, 768, 960, 1280, 1600];
const rasterExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);
const projectImages = new Set(['admin-dashboard.png', 'authentic.png', 'blog-app.png', 'hotwheelsshop.png', 'invincible.png', 'lich-truc.png', 'luxury-store.png', 'moodbystyle.png', 'news_app.png', 'sportshop.png', 't1sneaker.png', 'task-management.png', 'taxi-tayninh.png', 'student-card.png']);
const files = [];
await fs.rm(output, { recursive: true, force: true });

async function collect(directory, base) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
        if (entry.name === 'assets' || entry.name === 'src') continue;
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) await collect(fullPath, base);
        else if (rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
            const relative = path.relative(base, fullPath).replaceAll('\\', '/');
            const galleryImage = relative.startsWith('soft/');
            const projectImage = base === path.join(root, 'src', 'assets') && projectImages.has(entry.name);
            const portrait = base === path.join(root, 'public') && entry.name === 'portrait.png';
            if (galleryImage || projectImage || portrait) files.push({ fullPath, relativePath: relative });
        }
    }
}

for (const source of sources) await collect(source, source);
const manifest = {};

for (const file of files) {
    const isPortrait = path.basename(file.fullPath).toLowerCase() === 'portrait.png';
    let source = sharp(file.fullPath).rotate();
    let metadata = await source.metadata();
    if (!metadata.width || !metadata.height) continue;
    const relative = file.relativePath.replaceAll('\\', '/');
    const key = relative.replace(/\.(png|jpe?g|webp|avif)$/i, '');
    const folder = path.join(output, path.dirname(relative));
    await fs.mkdir(folder, { recursive: true });

    if (isPortrait) {
        const { data, info } = await source.clone().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
        let minX = info.width;
        let minY = info.height;
        let maxX = -1;
        let maxY = -1;
        for (let y = 0; y < info.height; y += 1) {
            for (let x = 0; x < info.width; x += 1) {
                const offset = (y * info.width + x) * 4;
                if (data[offset + 3] < 8) data[offset + 3] = 0;
                else {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
        }
        if (maxX < minX || maxY < minY) throw new Error('Portrait alpha channel contains no visible pixels.');
        const paddingX = Math.round((maxX - minX + 1) * 0.015);
        const paddingY = Math.round((maxY - minY + 1) * 0.015);
        const left = Math.max(0, minX - paddingX);
        const top = Math.max(0, minY - paddingY);
        const right = Math.min(info.width - 1, maxX + paddingX);
        const bottom = Math.min(info.height - 1, maxY + paddingY);
        const cropWidth = right - left + 1;
        const cropHeight = bottom - top + 1;
        const cropped = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
            .extract({ left, top, width: cropWidth, height: cropHeight })
            .extend({ top: paddingY, bottom: paddingY, left: paddingX, right: paddingX, background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toBuffer();
        source = sharp(cropped);
        metadata = await source.metadata();
        console.log(`portrait alpha trim: padded ${metadata.width}x${metadata.height}, figure ratio ${(metadata.width / metadata.height).toFixed(3)}; alpha < 8 cleared`);
    }

    const widths = [...new Set(sizes.map((size) => Math.min(size, metadata.width)))].sort((a, b) => a - b);
    const variants = {};

    for (const width of widths) {
        const resized = source.clone().resize({ width, withoutEnlargement: true });
        const avifName = `${path.basename(key)}-${width}.avif`;
        const webpName = `${path.basename(key)}-${width}.webp`;
        await Promise.all([
            resized.clone().avif({ quality: isPortrait ? 68 : 52, effort: 7, chromaSubsampling: isPortrait ? '4:4:4' : '4:2:0' }).toFile(path.join(folder, avifName)),
            resized.clone().webp({ quality: isPortrait ? 78 : 68, effort: 6 }).toFile(path.join(folder, webpName)),
        ]);
        variants[width] = {
                avif: `/assets/${path.dirname(relative) === '.' ? '' : `${path.dirname(relative).replaceAll('\\', '/')}/`}${avifName}`,
      webp: `/assets/${path.dirname(relative) === '.' ? '' : `${path.dirname(relative).replaceAll('\\', '/')}/`}${webpName}`,
    };
  }

  const placeholder = await source.clone().resize({ width: 24 }).blur(2).webp({ quality: 25 }).toBuffer();
  manifest[key] = {
    width: metadata.width,
    height: metadata.height,
    placeholder: `data:image/webp;base64,${placeholder.toString('base64')}`,
    variants,
  };
  console.log(`${relative}: ${metadata.width}x${metadata.height} → ${widths.join(', ')}px`);
}

await fs.mkdir(path.dirname(manifestFile), { recursive: true });
await fs.writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Optimized ${Object.keys(manifest).length} images; manifest saved to ${path.relative(root, manifestFile)}.`);