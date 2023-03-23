import { AuthParams } from '../../lib/types/index';
import {
  apiKey,
  apiSecret,
} from '../common';

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
];

