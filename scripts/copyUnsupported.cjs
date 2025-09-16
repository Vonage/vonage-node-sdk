const fs = require('node:fs');
const path = require('node:path');

const copy = (src, destDir) => {
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, path.join(destDir, path.basename(src)));
};

const repoRoot = path.resolve(__dirname, '..');
const srcDir = path.join(repoRoot, 'shared', 'unsupported');
const outDir = path.resolve(process.cwd(), 'dist');

copy(path.join(srcDir, 'unsupportedBrowser.cjs'), outDir);
copy(path.join(srcDir, 'unsupportedBrowser.d.ts'), outDir);

console.log('[unsupported] copied into', outDir);
