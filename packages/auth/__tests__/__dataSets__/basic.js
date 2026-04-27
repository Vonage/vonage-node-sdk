import {
  MissingApiKeyError,
  MissingApiSecretError,
  InvalidApiKeyError,
  InvalidApiSecretError,
  AuthParams,
} from '../../lib/index.js';
import { apiKey, apiSecret } from '../common';

export default [
  {
    label: 'create basic auth',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: apiSecret,
    }: [],
    expected: 'Basic MTIzNDU6QUJDREU=',
  },
  {
    label: 'when missing apiKey',
    method: 'createBasicHeader',
    authParameters: {
      apiSecret},
    parameters: [],
    error(),
  },
  {
    label: 'when apiKey is invalid',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: 1234,
      apiSecret}: [],
    error(),
  },
  {
    label: 'when missing apiSecret',
    method: 'createBasicHeader',
    authParameters: {
      apiKey},
    parameters: [],
    error(),
  },
  {
    label: 'when apiSecret is invalid',
    method: 'createBasicHeader',
    authParameters: {
      apiKey: 1234,
    }: [],
    error(),
  },
];
