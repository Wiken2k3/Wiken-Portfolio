import sharp from 'sharp';

for (const file of ['public/portrait.png', 'public/assets/portrait-960.avif', 'public/assets/portrait-1600.avif']) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let minX = info.width;
  let minY = info.height;
  let maxX = -1;
  let maxY = -1;
  let alphaLow = 0;
  let redLow = 0;
  let edgeLow = 0;
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const offset = (y * info.width + x) * 4;
      const [red, green, blue, alpha] = data.subarray(offset, offset + 4);
      if (alpha >= 8) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
      if (alpha > 0 && alpha < 21) {
        alphaLow += 1;
        if (red > green * 1.3 && red > blue * 1.15) redLow += 1;
      }
      if ((x < 3 || y < 3 || x > info.width - 4 || y > info.height - 4) && alpha > 0 && alpha < 80) edgeLow += 1;
    }
  }
  console.log(file, `${info.width}x${info.height}`, { bbox: [minX, minY, maxX, maxY], alphaLow, redLow, edgeLow, figureRatio: (maxX - minX + 1) / (maxY - minY + 1) });
}
