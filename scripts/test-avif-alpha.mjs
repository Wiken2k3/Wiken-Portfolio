import sharp from 'sharp';

for (const alphaQuality of [60, 80, 100]) {
  const buffer = await sharp('public/assets/portrait-768.webp').avif({ quality: 68, effort: 7, chromaSubsampling: '4:4:4', alphaQuality }).toBuffer();
  const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let edge = 0;
  let min = 255;
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const alpha = data[(y * info.width + x) * 4 + 3];
      if (alpha && alpha < min) min = alpha;
      if ((x < 3 || y < 3 || x > info.width - 4 || y > info.height - 4) && alpha > 0 && alpha < 128) edge += 1;
    }
  }
  console.log({ alphaQuality, bytes: buffer.length, minAlpha: min, translucentEdgePixels: edge });
}
