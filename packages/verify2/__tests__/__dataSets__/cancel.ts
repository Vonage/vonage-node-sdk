import {
  SDKTestCase,
  keyAuth,
  validateBearerAuth,
} from '../../../../testHelpers';
import {
  Verify2,
} from '../../lib/';

export default [
  {
    label: 'cancel request',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      ['/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1', 'DELETE'],
    ],
    responses: [
      [204],
    ],
    method: 'post',
    clientMethod: 'cancel',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1'],
    expected: true,
  },
  {
    label: 'error when request not found',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      ['/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1', 'DELETE'],
    ],
    responses: [
      [
        404,
        {
          title: 'Not Found',
          type: 'https://developer.vonage.com/api-errors#not-found',
          detail: 'Request <id> was not found or it has been verified already.',
          instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
        },
      ],
    ],
    clientMethod: 'cancel',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1'],
    expected: false,
  },
] as SDKTestCase<Verify2>[];
