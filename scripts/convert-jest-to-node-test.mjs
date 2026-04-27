#!/usr/bin/env node
/**
 * Converts Jest TypeScript tests to Node.js built-in test runner JavaScript tests.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── TypeScript stripping helpers ──────────────────────────────────────────────

function stripTypeScript(src) {
  // Remove import type {...} lines entirely
  src = src.replace(/^import\s+type\s+\{[^}]*\}\s+from\s+['"][^'"]*['"];?\s*\n/gm, '');

  // Remove inline type imports: import { Foo, type Bar } -> import { Foo }
  src = src.replace(/,\s*type\s+\w+/g, '');
  src = src.replace(/\btype\s+(\w+),/g, '$1,');
  src = src.replace(/import\s*\{\s*type\s+\w+\s*\}/g, '');

  // Remove TypeScript-only imports (interfaces, type aliases) that are purely types
  // We keep them if they contain values. Strategy: remove known type-only patterns
  const typeOnlyModules = [
    '@vonage/vetch',
    './types',
    '../types',
    '../../types',
    '../../../types',
  ];
  for (const mod of typeOnlyModules) {
    const re = new RegExp(`^import\\s+\\{[^}]*\\}\\s+from\\s+['"]${mod.replace(/\//g, '\\/')}['"];?\\s*\\n`, 'gm');
    src = src.replace(re, '');
  }

  // Remove @jest/globals imports entirely
  src = src.replace(/^import\s+\{[^}]*\}\s+from\s+['"]@jest\/globals['"];?\s*\n/gm, '');

  // Remove standalone type declarations: type Foo = ...;
  src = src.replace(/^type\s+\w[\w<>,\s|&\[\]]*\s*=\s*[^;]*;?\s*\n/gm, '');

  // Remove interface declarations (simple single-line and multi-line)
  src = src.replace(/^interface\s+\w+[^{]*\{[^}]*\}\s*\n/gm, '');

  // Remove TypeScript generics from function calls/definitions: <T>, <T, U>, etc.
  // But be careful not to remove JSX or comparison operators
  // Remove generic type parameters on class definitions: class Foo<T> extends Bar<T>
  src = src.replace(/^(class\s+\w+)<[^>]*>/gm, '$1');

  // Remove return type annotations: ): Type {  or  ): Promise<Type> {
  src = src.replace(/\)\s*:\s*(?:Promise<[^>]*>|[A-Z][A-Za-z<>\[\]|,\s]*)\s*(\{|=>)/g, ') $1');

  // Remove variable type annotations: const x: Type = ...
  src = src.replace(/(\b(?:const|let|var)\s+\w+)\s*:\s*(?:[A-Za-z_$][\w<>\[\]|,\s.]*)/g, '$1');

  // Remove parameter type annotations: (x: Type, y: Type)
  // Simple cases
  src = src.replace(/(\w)\s*:\s*(?:Array<[^>]*>|[A-Za-z_$][\w<>\[\]|,\s.]*(?:\[\])?)/g, '$1');

  // Remove `as Type` casts
  src = src.replace(/\s+as\s+(?:unknown\s+as\s+)?(?:[A-Z][\w<>\[\]|,\s.]*|\[\])/g, '');

  // Remove protected/private/public on class fields  
  src = src.replace(/\b(protected|private|public)\s+/g, '');

  // Remove readonly modifier
  src = src.replace(/\breadonly\s+/g, '');

  // Remove ! non-null assertions
  src = src.replace(/(\w)!/g, '$1');

  // Remove ts-ignore comments
  src = src.replace(/\/\/\s*@ts-ignore.*\n/g, '');

  // Remove eslint @typescript-eslint rules
  src = src.replace(/\/\/ eslint-disable-next-line @typescript-eslint\/[^\n]*/g, '// eslint-disable-next-line');

  // Remove jest/no-export eslint comments
  src = src.replace(/\/\* eslint-disable jest\/no-export \*\/\s*\n/g, '');

  return src;
}

// ── Balanced-paren matcher ───────────────────────────────────────────────────

/**
 * Find the closing paren position starting from `start` (which should be the
 * index of the opening paren).
 */
function findClosingParen(src, start) {
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    if (src[i] === '(') depth++;
    else if (src[i] === ')') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/**
 * Convert all expect(...).MATCHER(...) patterns, handling multiline.
 */
function convertExpectCalls(src) {
  const result = [];
  let pos = 0;

  while (pos < src.length) {
    // Find next `expect(`
    const eIdx = src.indexOf('expect(', pos);
    if (eIdx === -1) {
      result.push(src.slice(pos));
      break;
    }

    // Check if preceded by `await ` - for rejects chains
    // Push everything up to `expect(`
    result.push(src.slice(pos, eIdx));

    // Find the closing paren of expect(...)
    const eOpenParen = eIdx + 'expect'.length; // index of '('
    const eCloseParen = findClosingParen(src, eOpenParen);
    if (eCloseParen === -1) {
      result.push(src.slice(eIdx));
      break;
    }

    const expectArg = src.slice(eOpenParen + 1, eCloseParen);

    // What comes after expect(...)?
    let afterExpect = src.slice(eCloseParen + 1);

    // Match .not. prefix
    let negated = false;
    if (afterExpect.startsWith('.not.')) {
      negated = true;
      afterExpect = afterExpect.slice('.not.'.length);
    } else if (afterExpect.startsWith('.')) {
      afterExpect = afterExpect.slice(1);
    } else {
      // Not a Jest matcher call pattern
      result.push('expect(' + expectArg + ')');
      pos = eCloseParen + 1;
      continue;
    }

    // Match the method name
    const methodMatch = afterExpect.match(/^(\w+)\s*\(/);
    if (!methodMatch) {
      result.push('expect(' + expectArg + ')' + (negated ? '.not.' : '.') );
      pos = eCloseParen + 1;
      continue;
    }

    const methodName = methodMatch[1];
    const argStart = eCloseParen + 1 + (negated ? '.not.'.length : '.'.length) + methodName.length;
    // argStart should be the index of '(' in the method call
    const methodOpenParen = argStart; // index of '('
    const methodCloseParen = findClosingParen(src, methodOpenParen);
    if (methodCloseParen === -1) {
      result.push(src.slice(eIdx));
      break;
    }

    const methodArg = src.slice(methodOpenParen + 1, methodCloseParen).trim();
    pos = methodCloseParen + 1;

    // Now convert based on method name
    const x = expectArg.trim();
    const y = methodArg;

    let replacement;
    if (!negated) {
      switch (methodName) {
        case 'toEqual': replacement = `assert.deepEqual(${x}, ${y})`; break;
        case 'toStrictEqual': replacement = `assert.deepStrictEqual(${x}, ${y})`; break;
        case 'toBe': replacement = `assert.strictEqual(${x}, ${y})`; break;
        case 'toBeTruthy': replacement = `assert.ok(${x})`; break;
        case 'toBeFalsy': replacement = `assert.ok(!(${x}))`; break;
        case 'toBeNull': replacement = `assert.strictEqual(${x}, null)`; break;
        case 'toBeUndefined': replacement = `assert.strictEqual(${x}, undefined)`; break;
        case 'toBeDefined': replacement = `assert.notStrictEqual(${x}, undefined)`; break;
        case 'toBeInstanceOf': replacement = `assert.ok((${x}) instanceof ${y}, \`Expected instanceof ${y}\`)`; break;
        case 'toHaveLength': replacement = `assert.strictEqual((${x}).length, ${y})`; break;
        case 'toContain': replacement = `assert.ok((${x}).includes(${y}))`; break;
        case 'toMatchObject': replacement = `assert.deepEqual(${x}, ${y})`; break;
        case 'toBeGreaterThan': replacement = `assert.ok((${x}) > (${y}))`; break;
        case 'toBeLessThan': replacement = `assert.ok((${x}) < (${y}))`; break;
        case 'toBeGreaterThanOrEqual': replacement = `assert.ok((${x}) >= (${y}))`; break;
        case 'toBeLessThanOrEqual': replacement = `assert.ok((${x}) <= (${y}))`; break;
        case 'toThrow':
          replacement = `assert.throws(${x}${y ? ', ' + y : ''})`; break;
        case 'toHaveProperty': {
          const commaIdx = findArgSplit(y);
          if (commaIdx !== -1) {
            const propKey = y.slice(0, commaIdx).trim();
            const propVal = y.slice(commaIdx + 1).trim();
            replacement = `assert.deepEqual((${x})[${propKey}], ${propVal})`;
          } else {
            replacement = `assert.ok(Object.prototype.hasOwnProperty.call(${x}, ${y}))`;
          }
          break;
        }
        default:
          replacement = `expect(${x}).${methodName}(${y})`;
      }
    } else {
      switch (methodName) {
        case 'toEqual': replacement = `assert.notDeepEqual(${x}, ${y})`; break;
        case 'toBe': replacement = `assert.notStrictEqual(${x}, ${y})`; break;
        case 'toHaveProperty': replacement = `assert.ok(!Object.prototype.hasOwnProperty.call(${x}, ${y}))`; break;
        case 'toThrow': replacement = `assert.doesNotThrow(${x})`; break;
        default:
          replacement = `expect(${x}).not.${methodName}(${y})`;
      }
    }

    result.push(replacement);
  }

  return result.join('');
}

/**
 * Find the index of the first top-level comma in a string (not inside parens/brackets).
 */
function findArgSplit(s) {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth--;
    else if (c === ',' && depth === 0) return i;
  }
  return -1;
}

// Handle await expect(fn).rejects.toThrow patterns
function convertRejectsThrow(src) {
  // await expect(fn).rejects.toThrow(msg)
  src = src.replace(
    /await\s+expect\(([^)]+)\)\.rejects\.toThrow\(([^)]*)\)/g,
    (_, fn, err) => {
      if (!err.trim()) return `await assert.rejects(${fn})`;
      return `await assert.rejects(${fn}, (err) => { assert.ok(err.message.includes(${err}) || err.constructor.name === ${err} || String(err) === String(${err})); return true; })`;
    }
  );
  return src;
}

// ── Import path fixers ─────────────────────────────────────────────────────────

function fixImportPaths(src, isDataSet = false) {
  // testHelpers
  src = src.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/testHelpers['"]/g, "from '../../../testHelpers/index.js'");
  src = src.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/testHelpers\/['"]/g, "from '../../../testHelpers/index.js'");

  // from '../lib' or '../../lib' -> ../lib/index.js
  src = src.replace(/from\s+['"](\.{1,2}\/(?:\.\.\/)*lib)['"]/g, "from '$1/index.js'");

  // from './__dataSets__' or './__dataSets__/'
  src = src.replace(/from\s+['"]\.\/(__dataSets__)(?:\/)?['"]/g, "from './$1/index.js'");

  // from './common' -> './common.js'
  src = src.replace(/from\s+['"]\.\/common['"]/g, "from './common.js'");

  // Fix relative imports within __dataSets__: from './jwt' -> './jwt.js'
  if (isDataSet) {
    src = src.replace(/from\s+['"]\.\/([\w-]+)['"]/g, (match, name) => {
      // Don't add .js if already there or if it's a directory index
      if (name.endsWith('.js')) return match;
      return `from './${name}.js'`;
    });
  }

  return src;
}

// ── Jest → Node:test conversion ───────────────────────────────────────────────

function convertJestToNodeTest(src) {
  // Remove jest imports
  src = src.replace(/^import\s+\{[^}]*\}\s+from\s+['"]@jest\/globals['"];?\s*\n/gm, '');

  // Handle jest.* calls
  src = src.replace(/jest\.useFakeTimers\(\);?\s*\n/g, '');
  src = src.replace(/jest\.setSystemTime\([^)]*\);?\s*\n/g, '');
  src = src.replace(/jest\.fn\(\)/g, '() => {}');
  src = src.replace(/jest\.spyOn\([^)]*\)/g, '/* jest.spyOn removed */');

  // Handle await expect(...).rejects.toThrow BEFORE the general expect handler
  src = convertRejectsThrow(src);

  // Convert all expect(...).matcher(...) calls using balanced-paren parser
  src = convertExpectCalls(src);

  return src;
}

// ── describe.each / test.each rewriter ──────────────────────────────────────

function rewriteDescribeEach(src) {
  // describe.each(array)('$label', ({ tests }) => { ... })
  // This is used in transform.test.ts
  // We replace with a for loop
  src = src.replace(
    /describe\.each\((\w+)\)\s*\(\s*['"`]\$(\w+)['"`]\s*,\s*\(\{([^}]*)\}\)\s*=>\s*\{/g,
    (_, arr, prop, destructure) => {
      return `for (const _dsItem of ${arr}) {\n  const { ${destructure} } = _dsItem;\n  describe(_dsItem.${prop}, () => {`;
    }
  );

  // test.each(array)('Can $label [using $transformFn]', async ({...}) => {
  src = src.replace(
    /test\.each\((\w+)\)\s*\(\s*['"`]([^'"`]+)['"`]\s*,\s*(async\s*)?\(\{([^}]*)\}\)\s*=>/g,
    (_, arr, label, asyncKw, destructure) => {
      const testLabel = label.replace(/\$(\w+)/g, '${_tc.$1}');
      return `for (const _tc of ${arr}) {\n    test(\`${testLabel}\`, ${asyncKw || ''}({ ${destructure} } = _tc) =>`;
    }
  );

  return src;
}

// ── Deduplicate closing braces for for-loop rewrites ─────────────────────────
// (manual fix needed for complex cases)

// ── File writers ─────────────────────────────────────────────────────────────

function needsNodeTestImport(src) {
  return /\b(describe|test|it|beforeEach|afterEach|before|after)\s*\(/.test(src);
}

function addImports(src) {
  const hasAssert = src.includes('assert.');
  const hasTest = needsNodeTestImport(src);

  let imports = '';
  if (hasTest) {
    const testFns = ['describe', 'test', 'it', 'before', 'after', 'beforeEach', 'afterEach']
      .filter(fn => new RegExp(`\\b${fn}\\s*\\(`).test(src));
    imports += `import { ${testFns.join(', ')} } from 'node:test';\n`;
  }
  if (hasAssert) {
    imports += `import assert from 'node:assert/strict';\n`;
  }

  // Insert after any existing imports
  const firstNonImport = src.search(/^(?!import\s)/m);
  if (firstNonImport > 0) {
    return src.slice(0, firstNonImport) + imports + src.slice(firstNonImport);
  }
  return imports + src;
}

// ── Process a single TS file → JS file ───────────────────────────────────────

function convertFile(tsPath, jsPath, opts = {}) {
  let src = readFileSync(tsPath, 'utf8');

  src = stripTypeScript(src);
  src = convertJestToNodeTest(src);
  if (!opts.isDataSet) {
    src = rewriteDescribeEach(src);
  }
  src = fixImportPaths(src, opts.isDataSet);
  src = addImports(src);

  // Clean up empty lines
  src = src.replace(/\n{3,}/g, '\n\n');

  writeFileSync(jsPath, src, 'utf8');
  console.log(`  Wrote: ${jsPath.replace(ROOT, '')}`);
}

// ── Build testHelpers/vonageTest.js ──────────────────────────────────────────

function buildVonageTestJs() {
  const content = `import { describe, test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import nock from 'nock';
import { getResults } from './getResults.js';

// Sentinel for "match anything" in expected objects
const ANYTHING_SENTINEL = Symbol('ANYTHING');
export const anything = () => ANYTHING_SENTINEL;

function customDeepEqual(actual, expected) {
  if (expected === ANYTHING_SENTINEL) return;
  if (typeof expected !== 'object' || expected === null) {
    assert.deepEqual(actual, expected);
    return;
  }
  if (Array.isArray(expected)) {
    assert.ok(Array.isArray(actual), 'Expected an array');
    assert.strictEqual(actual.length, expected.length);
    expected.forEach((v, i) => customDeepEqual(actual[i], v));
    return;
  }
  for (const key of Object.keys(expected)) {
    if (expected[key] !== ANYTHING_SENTINEL) {
      customDeepEqual(actual[key], expected[key]);
    }
  }
}

/**
 * A Wrapper function to build out tests for Vonage SDKs
 *
 * @param {Array} testDataSets - An array of test data sets
 */
export const VonageTest = (testDataSets) => {
  for (const dataSet of testDataSets) {
    describe(dataSet.name, () => {
      afterEach(() => {
        nock.cleanAll();
      });

      const successTests = dataSet.tests.filter(({ error }) => !error);
      const failureTests = dataSet.tests.filter(({ error }) => !!error);

      for (const testCase of successTests) {
        test(\`Can \${testCase.label}\`, async () => {
          const scope = nock(testCase.baseUrl, {
            reqheaders: testCase.reqHeaders,
          });

          testCase.requests.forEach((request, index) => {
            scope.intercept(...request).reply(...testCase.responses[index]);
          });

          const results = await getResults(
            testCase.generator,
            testCase.client,
            testCase.clientMethod,
            testCase.parameters,
          );

          customDeepEqual(results, testCase.expected);
          assert.ok(nock.isDone(), 'nock interceptors were not used');
        });
      }

      for (const testCase of failureTests) {
        test(\`Will throw \${testCase.label}\`, async () => {
          const scope = nock(testCase.baseUrl, {
            reqheaders: testCase.reqHeaders,
          });

          testCase.requests.forEach((request, index) => {
            scope.intercept(...request).reply(...testCase.responses[index]);
          });

          await assert.rejects(
            () => getResults(false, testCase.client, testCase.clientMethod, testCase.parameters),
            (err) => {
              const errorVal = testCase.error;
              const errMsg = typeof errorVal === 'string' ? errorVal : (errorVal && errorVal.message ? errorVal.message : String(errorVal));
              assert.ok(
                err.message === errMsg ||
                err.message.includes(errMsg) ||
                err.constructor.name === errMsg ||
                String(err) === errMsg ||
                String(err).includes(errMsg),
                \`Expected error matching "\${errMsg}" but got "\${err.message}"\`
              );
              return true;
            }
          );

          assert.ok(nock.isDone(), 'nock interceptors were not used');
        });
      }
    });
  }
};
`;
  writeFileSync(join(ROOT, 'testHelpers/vonageTest.js'), content, 'utf8');
  console.log('  Wrote: testHelpers/vonageTest.js');
}

// ── Build testHelpers/index.js ────────────────────────────────────────────────

function buildTestHelpersIndexJs() {
  const content = `import { testPrivateKey } from './key.js';
import jwt from 'jsonwebtoken';

export * from './getResults.js';
export * from './key.js';
export * from './vonageTest.js';

export const applicationId = 'abcd-1234';

export const apiKey = 'testKey';
export const apiSecret = 'testSecret';

export const keyAuth = {
  privateKey: testPrivateKey,
  applicationId: applicationId
};

export const apiKeyAuth = {
  apiKey: apiKey,
  apiSecret: apiSecret
};

export const validateApiKeyAuth = (value) => value === \`Basic \${Buffer.from(\`\${apiKey}:\${apiSecret}\`).toString('base64')}\`;

export const validateBearerAuth = (value) => {
  const token = value.split(' ')[1];
  try {
    jwt.verify(token, testPrivateKey);
    return true;
  } catch (_) {
    return false;
  }
};
`;
  writeFileSync(join(ROOT, 'testHelpers/index.js'), content, 'utf8');
  console.log('  Wrote: testHelpers/index.js');
}

// ── Process all packages ──────────────────────────────────────────────────────

const TARGET_PACKAGES = [
  'accounts', 'applications', 'audit', 'auth', 'conversations',
  'identity-insights', 'jwt', 'media', 'messages', 'number-insight-v2',
  'number-insights', 'numbers', 'pricing', 'redact', 'server-client',
  'server-sdk', 'sms', 'subaccounts', 'users', 'verify', 'verify2',
  'video', 'voice'
];

function processPackage(pkg) {
  const testsDir = join(ROOT, 'packages', pkg, '__tests__');
  if (!existsSync(testsDir)) return;

  console.log(`\n[${pkg}]`);

  // Process common.ts -> common.js
  const commonTs = join(testsDir, 'common.ts');
  if (existsSync(commonTs)) {
    let src = readFileSync(commonTs, 'utf8');
    src = stripTypeScript(src);
    src = fixImportPaths(src);
    writeFileSync(join(testsDir, 'common.js'), src, 'utf8');
    console.log(`  Wrote: common.js`);
  }

  // Process *.test.ts files
  const files = readdirSync(testsDir);
  for (const file of files) {
    if (file.endsWith('.test.ts')) {
      const tsPath = join(testsDir, file);
      const jsPath = join(testsDir, file.replace('.test.ts', '.test.js'));
      convertFile(tsPath, jsPath);
    }
  }

  // Process __dataSets__ directory
  const dataSetsDir = join(testsDir, '__dataSets__');
  if (existsSync(dataSetsDir)) {
    const dsFiles = readdirSync(dataSetsDir);
    for (const file of dsFiles) {
      if (file.endsWith('.ts')) {
        const tsPath = join(dataSetsDir, file);
        const jsPath = join(dataSetsDir, file.replace('.ts', '.js'));
        let src = readFileSync(tsPath, 'utf8');
        src = stripTypeScript(src);
        // Replace expect.anything() with the sentinel
        src = src.replace(/expect\.anything\(\)/g, 'anything()');
        // Add anything import if needed
        if (src.includes('anything()')) {
          src = `import { anything } from '../../../../testHelpers/index.js';\n` + src;
        }
        src = fixImportPaths(src, true);
        writeFileSync(jsPath, src, 'utf8');
        console.log(`  Wrote: __dataSets__/${file.replace('.ts', '.js')}`);
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

console.log('=== Converting Jest tests to Node.js test runner ===\n');

console.log('[testHelpers]');
buildVonageTestJs();
buildTestHelpersIndexJs();

for (const pkg of TARGET_PACKAGES) {
  processPackage(pkg);
}

console.log('\n=== Done ===');
