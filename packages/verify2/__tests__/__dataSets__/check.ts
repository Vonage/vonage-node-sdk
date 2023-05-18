import { CheckCodeRequest, CheckRequestResponse } from '../../lib/types';

export default [
  {
    label: 'check code',
    request: [
      '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1',
      'POST',
            {
              code: '123456',
            } as CheckCodeRequest,
    ],
    response: [
      200,
            {
              request_id: '091e717f-8715-41a0-a3f0-cc04912deaa1',
              status: 'complete',
            } as CheckRequestResponse,
    ],
    method: 'post',
    clientMethod: 'checkCode',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1', '123456'],
    expected: 'complete',
  },
  {
    label: 'error when request not found',
    request: [
      '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1',
      'POST',
            {
              code: '123456',
            } as CheckCodeRequest,
    ],
    response: [
      404,
      {
        title: 'Not Found',
        type: 'https://developer.vonage.com/api-errors#not-found',
        detail: 'Request <id> was not found or it has been verified already.',
        instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
      },
    ],
    method: 'post',
    clientMethod: 'checkCode',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1', '123456'],
    expected: true,
    error: 'Request failed with status code 404',
  },
];
