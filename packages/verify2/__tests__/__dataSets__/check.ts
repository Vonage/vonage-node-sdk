import { CheckCodeRequest, CheckRequestResponse } from '../../lib/types';
import {
  SDKTestCase,
  keyAuth,
  validateBearerAuth,
} from '../../../../testHelpers';
import { Verify2 } from '../../lib';

export default [
  {
    label: 'check code',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1',
        'POST',
        {
          code: '123456',
        } as CheckCodeRequest,
      ],
    ],
    responses: [
      [
        200,
       {
         request_id: '091e717f-8715-41a0-a3f0-cc04912deaa1',
         status: 'complete',
       } as CheckRequestResponse,
      ],
    ],
    clientMethod: 'checkCode',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1', '123456'],
    expected: 'complete',
  },
  {
    label: 'error when request not found',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: 'Request failed with status code 404',
    requests: [
      [
        '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1',
        'POST',
        {
          code: '123456',
        } as CheckCodeRequest,
      ],
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
    clientMethod: 'checkCode',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1', '123456'],
    expected: true,
  },
] as SDKTestCase<Verify2>[];
