import fs from 'node:fs/promises';
import sharp from 'sharp';

for (const file of ['public/assets/portrait-768.avif', 'public/assets/portrait-768.webp', 'public/assets/portrait-960.avif']) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let min = 255;
  let max = 0;
  let count = 0;
  let edge = 0;
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const alpha = data[(y * info.width + x) * 4 + 3];
      if (alpha > 0) {
        min = Math.min(min, alpha);
        max = Math.max(max, alpha);
        count += 1;
        if ((x < 3 || y < 3 || x > info.width - 4 || y > info.height - 4) && alpha < 128) edge += 1;
      }
    }
  }
  const stat = await fs.stat(file);
  console.log(file, `${info.width}x${info.height}`, { minAlpha: min, maxAlpha: max, nonTransparentPixels: count, translucentEdgePixels: edge, bytes: stat.size });
}
