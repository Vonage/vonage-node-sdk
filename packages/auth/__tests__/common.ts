import { readFileSync } from 'fs';

export const apiKey = '12345';
export const apiSecret = 'ABCDE';
export const applicationId = '1234';
export const privateKeyPath = `${__dirname}/private.test.key`;
export const privateKeyString = readFileSync(privateKeyPath)
  .toString();
