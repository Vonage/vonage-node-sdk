import * as url from 'url';
import { readFileSync } from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const testPrivateKeyPath = `${__dirname}/private.key`;
export const testPrivateKey = readFileSync(testPrivateKeyPath, 'utf8');
