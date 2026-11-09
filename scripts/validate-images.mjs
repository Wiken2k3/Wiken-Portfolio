import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'src', 'data', 'imageManifest.json');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const sourceRoots = [path.join(root, 'src'), path.join(root, 'index.html')];
const references = new Set();
const imageExtension = /\.(?:avif|webp|png|jpe?g)$/i;

async function collectFiles(target) {
  const stat = await fs.stat(target);
  if (stat.isFile()) return [target];

  const files = [];
  for (const entry of await fs.readdir(target, { withFileTypes: true })) {
    const child = path.join(target, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(child));
    else if (/\.(?:tsx?|html)$/i.test(entry.name)) files.push(child);
  }
  return files;
}

for (const sourceRoot of sourceRoots) {
  for (const file of await collectFiles(sourceRoot)) {
    const source = await fs.readFile(file, 'utf8');
    for (const match of source.matchAll(/\/assets\/[^"'`$}]+/g)) {
      const candidates = match[0].includes(',')
        ? match[0].split(',').map((part) => part.trim().split(/\s+/)[0])
        : [match[0].trim()];
      for (const candidate of candidates) references.add(candidate);
    }
  }
}

function decodeAssetPath(url) {
  try {
    return decodeURIComponent(url.replace(/^\/assets\//, '')).replaceAll('/', path.sep);
  } catch {
    throw new Error(`Invalid encoded image URL: ${url}`);
  }
}

const generatedUrls = new Set();
for (const [key, image] of Object.entries(manifest)) {
  if (!image.variants || Object.keys(image.variants).length === 0) {
    throw new Error(`Image "${key}" has no generated variants.`);
  }

  for (const variant of Object.values(image.variants)) {
    for (const format of ['avif', 'webp']) {
      const url = variant[format];
      if (!url) continue;
      generatedUrls.add(url);
      const outputPath = path.join(root, 'public', 'assets', decodeAssetPath(url));
      try {
        await fs.access(outputPath);
      } catch {
        throw new Error(`Generated image is missing: ${url} (expected ${path.relative(root, outputPath)})`);
      }
    }
  }
}

const missing = [];
for (const url of references) {
  if (!url.startsWith('/assets/')) continue;
  const key = decodeAssetPath(url).replace(imageExtension, '').replaceAll(path.sep, '/');
  if (!Object.hasOwn(manifest, key) && !generatedUrls.has(url)) missing.push(url);
}

if (missing.length > 0) {
  throw new Error(`Image references are missing from the generated manifest:\n${missing.map((url) => `  - ${url}`).join('\n')}`);
}

console.log(`Validated ${Object.keys(manifest).length} image entries, ${generatedUrls.size} generated variants, and ${references.size} source references.`);
