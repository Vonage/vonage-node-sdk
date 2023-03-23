import nock from 'nock';
import { Auth } from '@vonage/auth';
import { readFileSync } from 'fs';
import { AuthenticationType, Client } from '../lib/index';

export class JWTAuthClient extends Client {
  protected authType = AuthenticationType.JWT;
}

export class KeyAuthClient extends Client {
  protected authType = AuthenticationType.KEY_SECRET;
}

export class QueryAuthClient extends Client {
  protected authType = AuthenticationType.QUERY_KEY_SECRET;
}

export class BasicAuthClient extends Client {
  protected authType = AuthenticationType.BASIC;
}

export const API_KEY = '1234';
export const API_SECRET = 'ABCDEF';
export const PRIVATE_KEY_FILE = `${__dirname}/private.test.key`;
export const PRIVATE_KEY = readFileSync(PRIVATE_KEY_FILE).toString();
export const BASE_URL = 'https://api.nexmo.com';
export const APP_ID = 'abcd-1234';

export const checkJWTAuth = (value) => value.startsWith('Bearer ');

export const checkBasicAuth = (value) => value === 'Basic MTIzNDpBQkNERUY=';

const scopes = {
  [AuthenticationType.JWT]: nock(BASE_URL, {
    reqheaders: {
      Authorization: checkJWTAuth,
    },
  }).persist(),
  [AuthenticationType.BASIC]: nock(BASE_URL, {
    reqheaders: {
      Authorization: checkBasicAuth,
    },
  }).persist(),
  [AuthenticationType.KEY_SECRET]: nock(BASE_URL).persist(),
  [AuthenticationType.QUERY_KEY_SECRET]: nock(BASE_URL).persist(),
};

const auths = {
  [AuthenticationType.JWT]: new Auth({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY,
  }),
  [AuthenticationType.BASIC]: new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
  }),
  [AuthenticationType.KEY_SECRET]: new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
  }),
  [AuthenticationType.QUERY_KEY_SECRET]: new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
  }),
};

export const getAuth = (authType: AuthenticationType): Auth => auths[authType];

const clients = {
  [AuthenticationType.JWT]: new JWTAuthClient(
    getAuth(AuthenticationType.JWT),
  ),
  [AuthenticationType.BASIC]: new BasicAuthClient(
    getAuth(AuthenticationType.BASIC),
  ),
  [AuthenticationType.KEY_SECRET]: new KeyAuthClient(
    getAuth(AuthenticationType.KEY_SECRET),
  ),
  [AuthenticationType.QUERY_KEY_SECRET]: new QueryAuthClient(
    getAuth(AuthenticationType.QUERY_KEY_SECRET),
  ),
};

export const getClient = (authType: AuthenticationType): Client =>
  clients[authType];

// eslint-disable-next-line max-len
export const getScope = (authType: AuthenticationType): nock => scopes[authType];
