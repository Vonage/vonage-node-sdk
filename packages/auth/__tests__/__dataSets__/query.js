import {
  MissingApiKeyError,
  MissingApiSecretError,
  AuthParams,
  AuthQueryParams,
} from '../../lib/index.js';
import { apiKey, apiSecret } from '../common';

export default [
  {
    label: 'add to query params',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret,
    }: [],
    expected: {
      api_key: apiSecret,
    }},
  {
    label: 'append to query params',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret,
    }: [
      {
        fizz: 'buzz',
      },
    ],
    expected: {
      fizz: 'buzz',
      api_key: apiSecret,
    }},
  {
    label: 'add key and secret without being overidden',
    method: 'getQueryParams',
    authParameters: {
      apiKey,
      apiSecret,
    }: [
      {
        api_key: 'not my key',
        api_secret: 'not my secret',
      },
    ],
    expected: {
      api_key: apiSecret,
    }},
  {
    label: 'when apiKey is missing',
    method: 'getQueryParams',
    authParameters: {
      apiSecret},
    parameters: [],
    error(),
  },
  {
    label: 'when apiSecret is missing',
    method: 'getQueryParams',
    authParameters: {
      apiKey},
    parameters: [],
    error(),
  },
];
