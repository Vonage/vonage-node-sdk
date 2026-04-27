#!/usr/bin/env node
/**
 * TypeScript to JavaScript conversion script for Vonage Node SDK
 *
 * Strategy:
 * 1. Pre-process enums → Object.freeze (Babel produces IIFEs; we want Object.freeze)
 * 2. Collect all interface/type typedef info from the ORIGINAL source
 * 3. Run Babel to strip remaining TypeScript syntax
 * 4. Inject collected @typedef JSDoc comments into the Babel output
 *    (at the top, after imports)
 * 5. Post-process cleanup
 */

import { readFileSync, writeFileSync } from 'fs';
import { transformSync } from '@babel/core';
import { execSync } from 'child_process';

// ─── source navigation helpers ─────────────────────────────────────────────────

/** Find the index AFTER the matching closing char, skipping strings/comments. */
function findClosing(src, openIdx, openCh = '{', closeCh = '}') {
  let depth = 1;
  let i = openIdx + 1;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (ch === '\\') { i += 2; continue; }
    if (ch === '`') {
      i++;
      while (i < src.length && src[i] !== '`') {
        if (src[i] === '\\') i++;
        i++;
      }
      i++;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const q = ch; i++;
      while (i < src.length && src[i] !== q) {
        if (src[i] === '\\') i++;
        i++;
      }
      i++;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) i++;
      i += 2;
      continue;
    }
    if (ch === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    if (ch === openCh) depth++;
    else if (ch === closeCh) depth--;
    i++;
  }
  return i;
}

/**
 * Find the end of a type alias expression starting after `=`.
 * Returns the index AFTER the last character (incl. trailing `;`).
 */
function findTypeEnd(src, afterEquals) {
  let i = afterEquals;
  let depth = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '\\') { i += 2; continue; }
    if (ch === '`') {
      i++;
      while (i < src.length && src[i] !== '`') {
        if (src[i] === '\\') i++;
        i++;
      }
      i++;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const q = ch; i++;
      while (i < src.length && src[i] !== q) {
        if (src[i] === '\\') i++;
        i++;
      }
      i++;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) i++;
      i += 2;
      continue;
    }
    if (ch === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    if (ch === '{' || ch === '(' || ch === '[') depth++;
    else if (ch === '}' || ch === ')' || ch === ']') { if (depth > 0) depth--; }
    if (ch === ';' && depth === 0) return i + 1;
    if (ch === '\n' && depth === 0) {
      let j = i + 1;
      while (j < src.length && (src[j] === ' ' || src[j] === '\t')) j++;
      const n = src[j];
      if (n === '|' || n === '&' || n === '?' ||
          src.slice(j, j + 2) === '=>' || n === '(' || n === '[') {
        i++;
        continue;
      }
      return i;
    }
    i++;
  }
  return i;
}

/** Extract the JSDoc block immediately before `declIndex`. */
function extractPrecedingJsDoc(src, declIndex) {
  let i = declIndex - 1;
  while (i >= 0 && /[\s]/.test(src[i])) i--;
  if (i < 1 || src[i] !== '/' || src[i - 1] !== '*') {
    return { text: null, startIndex: declIndex };
  }
  let j = i - 1;
  while (j >= 1 && !(src[j] === '*' && src[j - 1] === '/')) j--;
  if (j < 1) return { text: null, startIndex: declIndex };
  return { text: src.slice(j - 1, i + 1), startIndex: j - 1 };
}

// ─── JSDoc / type helpers ─────────────────────────────────────────────────────

/** Extract description lines from a JSDoc comment (no @ tags). */
function extractJsDocDescription(jsDoc) {
  if (!jsDoc) return '';
  return jsDoc
    .replace(/^\/\*\*\s*\n?/, '')
    .replace(/\s*\*\/$/, '')
    .split('\n')
    .map(l => l.replace(/^\s*\*\s?/, ''))
    .filter(l => !l.trim().startsWith('@') && l.trim() !== '')
    .join('\n')
    .trim();
}

/** Strip any JSDoc markers and get plain text. */
function docToText(rawDoc) {
  if (!rawDoc) return '';
  return rawDoc
    .replace(/\/\*\*|\*\//g, '')
    .split('\n')
    .map(l => l.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
    .join(' ')
    .trim();
}

/** Simplify a TypeScript type to a JSDoc-safe type string. */
function simplifyTSType(raw) {
  if (!raw) return '*';
  let t = raw.trim();
  if (t.startsWith('{') || t.startsWith('(')) return 'Object';
  if (t.endsWith('[]')) return `Array.<${simplifyTSType(t.slice(0, -2))}>`;
  t = t.replace(/\s*\|\s*(undefined|null)\b/g, '')
       .replace(/\b(undefined|null)\s*\|\s*/g, '').trim();
  // Strip TypeScript generic type parameters (e.g. Array<string> → Array)
  t = t.replace(/[<][^>]*[>]/g, '').trim();
  const MAP = {
    string: 'string', number: 'number', boolean: 'boolean',
    any: '*', unknown: '*', void: 'void', never: 'never',
    object: 'Object', Object: 'Object', null: 'null',
    undefined: 'undefined', bigint: 'bigint', symbol: 'symbol',
  };
  return MAP[t] || t || '*';
}

/** Parse direct properties of an object type body. */
function parseObjectTypeProps(body) {
  const trimmed = body.trim();
  if (!trimmed.startsWith('{')) return [];
  const inner = trimmed.slice(1, trimmed.lastIndexOf('}')).trim();
  const props = [];
  let docAccum = '';
  let lineAccum = '';
  let depth = 0;

  for (const line of inner.split('\n')) {
    const t = line.trim();
    if (t.startsWith('/**') || (t.startsWith('*') && !t.startsWith('*/'))) {
      docAccum += t + '\n'; continue;
    }
    if (t === '*/') { docAccum += '*/\n'; continue; }
    if (t.startsWith('/*') && t.endsWith('*/')) {
      docAccum = t + '\n'; continue;
    }
    for (const ch of t) {
      if (ch === '{' || ch === '(' || ch === '[') depth++;
      else if (ch === '}' || ch === ')' || ch === ']') depth--;
    }
    lineAccum += (lineAccum ? ' ' : '') + t;
    if (depth === 0 && lineAccum && (t.endsWith(';') || t.endsWith(','))) {
      const propStr = lineAccum.replace(/[;,]$/, '').trim();
      const m = propStr.match(/^([A-Za-z_$][A-Za-z0-9_$]*)(\??):\s*(.+)$/);
      if (m && !m[3].includes('(')) {
        const rawDesc = docToText(docAccum);
        // Break up any embedded block-comment markers to avoid breaking JSDoc
        const safeDesc = rawDesc.replace(/\/\*/g, '/ *').replace(/\*\//g, '* /');
        props.push({
          name: m[1], optional: m[2] === '?',
          type: simplifyTSType(m[3]),
          desc: safeDesc,
        });
      }
      lineAccum = '';
      docAccum = '';
    }
  }
  return props;
}

/** Build a @typedef JSDoc comment string. */
function buildTypedefJsDoc(name, prevDoc, body) {
  const desc = extractJsDocDescription(prevDoc);
  let out = '/**\n';
  if (desc) {
    out += desc.split('\n').map(l => ` * ${l}`).join('\n') + '\n *\n';
  }
  out += ` * @typedef {Object} ${name}\n`;
  const props = body ? parseObjectTypeProps(body) : [];
  for (const p of props) {
    const nameTag = p.optional ? `[${p.name}]` : p.name;
    const propDesc = p.desc ? ` - ${p.desc}` : '';
    out += ` * @property {${p.type}} ${nameTag}${propDesc}\n`;
  }
  out += ' */';
  return out;
}

// ─── typedef collection ────────────────────────────────────────────────────────

/**
 * Scan the source and collect @typedef info for all interface and type
 * declarations.  Returns an array of typedef comment strings.
 */
function collectTypedefs(src) {
  const typedefs = [];

  // ── interfaces ──
  const ifaceRe = /(export\s+)?interface\s+([A-Za-z_$][A-Za-z0-9_$]*)(?:<[^{]*>)?\s*(?:extends\s+[^{]+)?\{/g;
  let m;
  while ((m = ifaceRe.exec(src)) !== null) {
    const ifaceStart = m.index;
    const openBrace = m.index + m[0].length - 1;
    const afterClose = findClosing(src, openBrace);
    const body = '{' + src.slice(openBrace + 1, afterClose - 1) + '}';
    const { text: prevDoc } = extractPrecedingJsDoc(src, ifaceStart);
    const name = m[2].replace(/[<][^=\n]*[>]/, '').trim();
    typedefs.push(buildTypedefJsDoc(name, prevDoc, body));
  }

  // ── type aliases ──
  const typeRe = /(export\s+)?type\s+([A-Za-z_$][A-Za-z0-9_$]*)(?:<[^=\n]*>)?\s*=/g;
  while ((m = typeRe.exec(src)) !== null) {
    const typeStart = m.index;
    const afterEquals = m.index + m[0].length;
    const typeEnd = findTypeEnd(src, afterEquals);
    const rawBody = src.slice(afterEquals, typeEnd).trim().replace(/;$/, '').trim();
    const { text: prevDoc } = extractPrecedingJsDoc(src, typeStart);
    const name = m[2];
    let body = null;
    const braceIdx = rawBody.indexOf('{');
    if (braceIdx !== -1) {
      const closeIdx = findClosing(rawBody, braceIdx);
      body = rawBody.slice(braceIdx, closeIdx);
    }
    typedefs.push(buildTypedefJsDoc(name, prevDoc, body));
  }

  return typedefs;
}

// ─── enum pre-processor ────────────────────────────────────────────────────────

function preProcessEnums(src) {
  const re = /(export\s+)?(const\s+)?enum\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*\{/g;
  let match;
  const reps = [];

  while ((match = re.exec(src)) !== null) {
    const enumStart = match.index;
    const openBrace = match.index + match[0].length - 1;
    const afterClose = findClosing(src, openBrace);
    const body = src.slice(openBrace + 1, afterClose - 1);
    const { text: prevDoc, startIndex: docStart } = extractPrecedingJsDoc(src, enumStart);
    const from = prevDoc ? docStart : enumStart;
    const exportPfx = match[1] || '';
    const name = match[3];

    // Parse members
    const members = [];
    const memberRe = /(\/\*\*[\s\S]*?\*\/\s*)?([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*([^,\n}]+)/g;
    let mm;
    while ((mm = memberRe.exec(body)) !== null) {
      members.push({
        doc: (mm[1] || '').trim(),
        name: mm[2].trim(),
        value: mm[3].trim().replace(/,\s*$/, '').trim(),
      });
    }

    let out = '';
    if (prevDoc) {
      out += prevDoc.replace(/\*\/$/, '* @enum {string}\n */') + '\n';
    }
    out += `${exportPfx}const ${name} = Object.freeze({\n`;
    for (const entry of members) {
      if (entry.doc) {
        out += entry.doc.split('\n').map(l => '  ' + l).join('\n') + '\n';
      }
      out += `  ${entry.name}: ${entry.value},\n`;
    }
    out += '});\n';

    reps.push({ from, to: afterClose, text: out });
  }

  let result = src;
  for (const rep of reps.sort((a, b) => b.from - a.from)) {
    result = result.slice(0, rep.from) + rep.text + result.slice(rep.to);
  }
  return result;
}

// ─── typedef injection ─────────────────────────────────────────────────────────

/**
 * Find the end of the last top-level import statement in JS code.
 * Returns the character index after the last import line.
 */
function findEndOfImports(code) {
  const lines = code.split('\n');
  let lastImportLine = -1;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith('import ') || trimmed.startsWith("import'") ||
        (lastImportLine >= 0 && trimmed === '')) {
      // Keep going past empty lines after imports
    } else if (lastImportLine >= 0) {
      break;
    }
    if (trimmed.startsWith('import ')) lastImportLine = i;
  }
  if (lastImportLine < 0) return 0;
  // Find byte position of end of lastImportLine + 1
  let pos = 0;
  for (let i = 0; i <= lastImportLine; i++) {
    pos += lines[i].length + 1; // +1 for '\n'
  }
  return pos;
}

/**
 * Inject typedef comments into code after the last import statement.
 */
function injectTypedefs(code, typedefs) {
  if (!typedefs.length) return code;
  const insertAt = findEndOfImports(code);
  const block = typedefs.join('\n\n') + '\n\n';
  return code.slice(0, insertAt) + block + code.slice(insertAt);
}

// ─── babel ────────────────────────────────────────────────────────────────────

function runBabel(src, filename) {
  try {
    const result = transformSync(src, {
      filename: filename || 'input.ts',
      plugins: [
        ['@babel/plugin-transform-typescript', {
          allExtensions: true,
          allowDeclareFields: true,
          allowNamespaces: true,
          isTSX: false,
          onlyRemoveTypeImports: false,
          optimizeConstEnums: false,
        }],
      ],
      retainLines: true,
      configFile: false,
      babelrc: false,
      generatorOpts: {
        retainLines: true,
        compact: false,
        concise: false,
        comments: true,
      },
    });
    return result ? result.code : src;
  } catch (err) {
    return { error: err.message.split('\n')[0] };
  }
}

// ─── post-process ─────────────────────────────────────────────────────────────

function postProcess(code) {
  code = code.replace(/^export\s+type\s+[^\n]+\n?/gm, '');
  code = code.replace(/^type\s+[A-Za-z_$][^\n]*\n?/gm, '');
  code = code.replace(/\n{3,}/g, '\n\n');
  code = code.replace(/[ \t]+$/gm, '');
  return code.trim() + '\n';
}

// ─── file converter ───────────────────────────────────────────────────────────

function convertFile(tsPath) {
  const src = readFileSync(tsPath, 'utf8');
  const jsPath = tsPath.replace(/\.ts$/, '.js');

  // 1. Collect typedef info from ORIGINAL source (before any transforms)
  const typedefs = collectTypedefs(src);

  // 2. Pre-process enums → Object.freeze
  let processed = preProcessEnums(src);

  // 3. Run Babel
  let jsCode = runBabel(processed, tsPath);

  let babelFailed = false;
  if (typeof jsCode === 'object' && jsCode.error) {
    process.stderr.write(`  [BABEL ERROR] ${tsPath.split('/').slice(-3).join('/')}: ${jsCode.error}\n`);
    babelFailed = true;
    // Fallback: Babel on original source
    const fallback = runBabel(src, tsPath);
    jsCode = typeof fallback === 'string' ? fallback : processed;
  }

  // 4. Inject @typedef comments after imports
  if (typedefs.length > 0) {
    jsCode = injectTypedefs(jsCode, typedefs);
  }

  // 5. Post-process
  jsCode = postProcess(jsCode);

  writeFileSync(jsPath, jsCode, 'utf8');
  return { babelFailed };
}

// ─── file discovery ───────────────────────────────────────────────────────────

const REPO_ROOT = '/home/runner/work/vonage-node-sdk/vonage-node-sdk';
const EXCLUDED = new Set([
  'network-client', 'network-number-verification',
  'network-sim-swap', 'vetch',
]);

function findTsFiles() {
  const files = [];
  const pkgOut = execSync(
    `find "${REPO_ROOT}/packages" -maxdepth 7 -name "*.ts" -path "*/lib/*" | sort`,
    { encoding: 'utf8' }
  );
  for (const f of pkgOut.trim().split('\n').filter(Boolean)) {
    if (f.includes('node_modules')) continue;
    const parts = f.split('/');
    const pi = parts.indexOf('packages');
    if (pi !== -1 && EXCLUDED.has(parts[pi + 1])) continue;
    files.push(f);
  }
  try {
    const helpOut = execSync(
      `find "${REPO_ROOT}/testHelpers" -name "*.ts" | sort`,
      { encoding: 'utf8' }
    );
    for (const f of helpOut.trim().split('\n').filter(Boolean)) {
      if (!f.includes('node_modules')) files.push(f);
    }
  } catch (_) {}
  return files;
}

// ─── entry point ──────────────────────────────────────────────────────────────

const files = findTsFiles();
console.log(`Found ${files.length} TypeScript files to convert.\n`);

let converted = 0, babelFallbacks = 0, hardErrors = 0;
const failed = [];

for (const tsFile of files) {
  const rel = tsFile.replace(REPO_ROOT + '/', '');
  try {
    const { babelFailed } = convertFile(tsFile);
    converted++;
    if (babelFailed) babelFallbacks++;
    if (converted % 100 === 0) process.stdout.write(`  ${converted}/${files.length}\n`);
  } catch (err) {
    process.stderr.write(`  [HARD ERROR] ${rel}: ${err.message}\n`);
    failed.push(rel);
    hardErrors++;
  }
}

console.log(`\nDone. Converted: ${converted}, Babel fallbacks: ${babelFallbacks}, Errors: ${hardErrors}`);
if (failed.length) { console.log('Failed:'); failed.forEach(f => console.log('  ' + f)); }
