import { testPrivateKey } from './key';
import jwt from 'jsonwebtoken';

export * from './types';
export * from './getResults';
export * from './key';
export * from './vonageTest';

export const applicationId = 'abcd-1234';

export const apiKey = 'testKey';
export const apiSecret = 'testSecret';

export const keyAuth = {
  privateKey: testPrivateKey,
  applicationId: applicationId,
};

export const apiKeyAuth = {
  apiKey: apiKey,
  apiSecret: apiSecret,
};

export const validateApiKeyAuth = (value: string) => value === `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;

export const validateBearerAuth = (value: string) => {
  const token = value.split(' ')[1];
  try {
    jwt.verify(token, testPrivateKey);
    return true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return false;
  }
};

