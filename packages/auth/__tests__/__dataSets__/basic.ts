import {
  MissingApiKeyError,
  MissingApiSecretError,
  InvalidApiKeyError,
  InvalidApiSecretError,
} from '../../lib/errors/index';
import { AuthParams } from '../../lib/types/index';
import { apiKey, apiSecret } from '../common';

export default [
  {
    label: 'create basic auth',
    method: 'createBasicHeader',
    authParameters: {
      apiKey,
      apiSecret,
    } as AuthParams,
    parameters: [],
    expected: `Basic MTIzNDU6QUJDREU=`,
  },
  {
    label: 'when missing apiKey',
    method: 'createBasicHeader',
    authParameters: {
      apiSecret,
    },
    parameters: [],
    error: new MissingApiKeyError(),
  },
  {
    label: 'when apiKey is invalid',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: 1234,
      apiSecret,
    },
    parameters: [],
    error: new InvalidApiKeyError(),
  },
  {
    label: 'when missing apiSecret',
    method: 'createBasicHeader',
    authParameters: {
      apiKey,
    },
    parameters: [],
    error: new MissingApiSecretError(),
  },
  {
    label: 'when apiSecret is invalid',
    method: 'createBasicHeader',
    authParameters: {
      apiKey,
      apiSecret: 1234,
    },
    parameters: [],
    error: new InvalidApiSecretError(),
  },
];
