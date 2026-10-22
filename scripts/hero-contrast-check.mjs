import sharp from 'sharp';

const files = [
  ['C:/Users/Admin/AppData/Local/Temp/wiken-teal-390.png', [[20, 15], [30, 94], [30, 170], [190, 520], [180, 610]]],
  ['C:/Users/Admin/AppData/Local/Temp/wiken-teal-1440.png', [[80, 40], [1150, 155], [1180, 180], [690, 450], [1100, 400]]],
];

for (const [file, samples] of files) {
  const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  for (const [x, y] of samples) {
    const offset = (y * info.width + x) * 3;
    const rgb = [...data.subarray(offset, offset + 3)];
    const linear = rgb.map((channel) => channel / 255).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    const luminance = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
    console.log(`${file} (${x},${y}) rgb(${rgb.join(',')}) white contrast ${(1.05 / (luminance + 0.05)).toFixed(2)}:1`);
  }
}
