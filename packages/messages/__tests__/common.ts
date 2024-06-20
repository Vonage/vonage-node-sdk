import nock from 'nock';
import { Auth, AlgorithmTypes } from '@vonage/auth';
import { Messages } from '../lib/index';
import { readFileSync } from 'fs';

export enum AuthType {
  JWT = 'jwt',
  SIG = 'sig',
  QUERY = 'query',
}

export const BASE_URL = 'https://api.nexmo.com';

const checkJWTAuth = (value) => value.startsWith('Bearer ');

const testKey = readFileSync(`${__dirname}/private.test.key`).toString();

const scopes = {
  [AuthType.JWT]: nock(BASE_URL, {
    reqheaders: {
      Authorization: checkJWTAuth,
    },
  }).persist(),
  [AuthType.SIG]: nock(BASE_URL).persist(),
  [AuthType.QUERY]: nock(BASE_URL).persist(),
};

const auths = {
  [AuthType.JWT]: new Auth({
    applicationId: 'abcd-1234',
    privateKey: testKey,
  }),
  [AuthType.SIG]: new Auth({
    apiKey: '12345',
    signature: {
      secret: 'ABCDE',
      algorithm: AlgorithmTypes.md5hash,
    },
  }),
  [AuthType.QUERY]: new Auth({
    apiKey: '12345',
    apiSecret: 'ABCDE',
  }),
};

export const getAuth = (authType: AuthType): Auth => auths[authType];

export const getClient: Messages = (authType: AuthType): Messages =>
  new Messages(getAuth(authType));

export const getScope = (authType: AuthType): nock => scopes[authType];
