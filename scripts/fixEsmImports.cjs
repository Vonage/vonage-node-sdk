/**
 * After esbuild renames .js → .mjs in dist/esm, the relative import paths
 * within the output files still reference .js extensions. This script updates
 * all relative imports in .mjs files to use the .mjs extension instead.
 */
const fs = require('node:fs');
const path = require('node:path');

const esmDir = path.resolve(process.cwd(), 'dist/esm');

const fixImportsInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace relative .js imports/exports with .mjs
  const updated = content.replace(
    /(from\s+["'])(\.\.?\/[^"']+?)\.js(["'])/g,
    '$1$2.mjs$3'
  );
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
  }
};

const walkDir = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.mjs')) {
      fixImportsInFile(fullPath);
    }
  }
};

walkDir(esmDir);
console.log('[fixEsmImports] updated .mjs import paths in', esmDir);
