import * as url from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const testPrivateKeyPath = `${__dirname}/private.key`;
export const testPrivateKey = readFileSync(testPrivateKeyPath, { encoding: 'utf8' });
