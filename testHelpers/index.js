import { testPrivateKey } from './key.js';
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

export const validateApiKeyAuth = (value) => value === `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;

export const validateBearerAuth = (value) => {
  const token = value.split(' ')[1];
  try {
    jwt.verify(token, testPrivateKey);
    return true;
  } catch (_) {
    return false;
  }
};
