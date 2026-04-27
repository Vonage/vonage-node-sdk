import { CheckCodeRequest, CheckRequestResponse } from '../../lib/types';
import {
  SDKTestCase,
  keyAuth,
  validateBearerAuth,
} from '../../../../testHelpers';
import { Verify2 } from '../../lib/index.js';

export default [
  {
    label: 'check code',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1',
        'POST',
        {
          code: '123456',
        }: [
      [
        200,
       {
         request_id: '091e717f-8715-41a0-a3f0-cc04912deaa1',
         status: 'complete',
       }: 'checkCode',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1', '123456'],
    expected: 'complete',
  },
  {
    label: 'error when request not found',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: 'Request failed with status code 404',
    requests: [
      [
        '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1',
        'POST',
        {
          code: '123456',
        }: [
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
    expected},
];
