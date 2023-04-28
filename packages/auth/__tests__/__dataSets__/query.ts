import {
  MissingApiKeyError,
  MissingApiSecretError,
  InvalidApiKeyError,
  InvalidApiSecretError,
} from '../../lib/errors/index';
import { AuthParams, AuthQueryParams } from '../../lib/types/index';
import { apiKey, apiSecret } from '../common';

export default [
  {
    label: 'add to query params',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret,
    } as AuthParams,
    parameters: [],
    expected: {
      api_key: apiKey,
      api_secret: apiSecret,
    } as AuthQueryParams,
  },
  {
    label: 'append to query params',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret,
    } as AuthParams,
    parameters: [
      {
        fizz: 'buzz',
      },
    ],
    expected: {
      fizz: 'buzz',
      api_key: apiKey,
      api_secret: apiSecret,
    } as AuthQueryParams,
  },
  {
    label: 'add key and secret without being overidden',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret,
    } as AuthParams,
    parameters: [
      {
        api_key: 'not my key',
        api_secret: 'not my secret',
      },
    ],
    expected: {
      api_key: apiKey,
      api_secret: apiSecret,
    } as AuthQueryParams,
  },
  {
    label: 'when apiKey is missing',
    method: 'getQueryParams',
    authParameters: {
      apiSecret,
    },
    parameters: [],
    error: new MissingApiKeyError(),
  },
  {
    label: 'when apiKey is invalid',
    method: 'getQueryParams',
    authParameters: {
      apiKey: 12345,
      apiSecret,
    },
    parameters: [],
    error: new InvalidApiKeyError(),
  },
  {
    label: 'when apiSecret is missing',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
    },
    parameters: [],
    error: new MissingApiSecretError(),
  },
  {
    label: 'when apiSecret is invalid',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret: 12345,
    },
    parameters: [],
    error: new InvalidApiSecretError(),
  },
];
