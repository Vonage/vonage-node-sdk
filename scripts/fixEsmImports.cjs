/**
 * After esbuild renames .js → .mjs in dist/esm, the relative import paths
 * within the output files still reference .js extensions. This script updates
 * all relative imports in .mjs files to use the .mjs extension instead.
 *
 * It also copies TypeScript declaration files (.d.ts) from dist/cjs to
 * dist/esm as .d.mts files, updating import paths accordingly.
 */
const fs = require('node:fs');
const path = require('node:path');

const esmDir = path.resolve(process.cwd(), 'dist/esm');
const cjsDir = path.resolve(process.cwd(), 'dist/cjs');

const fixImportsInFile = (filePath, fromExt, toExt) => {
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace relative .js (or .d.ts) imports/exports with the target extension
  const pattern = new RegExp(
    `(from\\s+["'])(\\.\\.\?/[^"']+?)${fromExt.replace('.', '\\.')}(["'])`,
    'g'
  );
  const updated = content.replace(pattern, `$1$2${toExt}$3`);
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
  }
};

const walkDir = (dir, callback) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile()) {
      callback(fullPath, entry.name);
    }
  }
};

// Fix .js → .mjs imports in .mjs files
walkDir(esmDir, (fullPath, name) => {
  if (name.endsWith('.mjs')) {
    fixImportsInFile(fullPath, '.js', '.mjs');
  }
});
console.log('[fixEsmImports] updated .mjs import paths in', esmDir);

// Copy .d.ts → .d.mts in dist/esm, fixing import paths
if (fs.existsSync(cjsDir)) {
  walkDir(cjsDir, (fullPath, name) => {
    if (!name.endsWith('.d.ts')) return;

    const relativePath = path.relative(cjsDir, fullPath);
    const destPath = path.join(esmDir, relativePath.replace(/\.d\.ts$/, '.d.mts'));

    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    let content = fs.readFileSync(fullPath, 'utf8');
    // Replace relative .js imports with .mjs in the declaration file
    content = content.replace(
      /(from\s+["'])(\.\.?\/[^"']+?)\.js(["'])/g,
      '$1$2.mjs$3'
    );
    fs.writeFileSync(destPath, content, 'utf8');
  });
  console.log('[fixEsmImports] copied .d.ts → .d.mts in', esmDir);
}
