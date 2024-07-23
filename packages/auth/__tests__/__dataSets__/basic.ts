import {
  MissingApiKeyError,
  MissingApiSecretError,
  InvalidApiKeyError,
  InvalidApiSecretError,
  AuthParams,
} from '../../lib';
import { apiKey, apiSecret } from '../common';

export default [
  {
    label: 'create basic auth',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: apiKey,
      apiSecret: apiSecret,
    } as AuthParams,
    parameters: [],
    expected: 'Basic MTIzNDU6QUJDREU=',
  },
  {
    label: 'when missing apiKey',
    method: 'createBasicHeader',
    authParameters: {
      apiSecret: apiSecret,
    },
    parameters: [],
    error: new MissingApiKeyError(),
  },
  {
    label: 'when apiKey is invalid',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: 1234,
      apiSecret: apiSecret,
    } as unknown as AuthParams,
    parameters: [],
    error: new InvalidApiKeyError(),
  },
  {
    label: 'when missing apiSecret',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: apiKey,
    },
    parameters: [],
    error: new MissingApiSecretError(),
  },
  {
    label: 'when apiSecret is invalid',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: apiKey,
      apiSecret: 1234,
    } as unknown as AuthParams,
    parameters: [],
    error: new InvalidApiSecretError(),
  },
];
