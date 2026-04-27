import { VoiceCallbackTypeEnum } from '../../lib/index.js';

const BASE_URL = 'https://rest.nexmo.com';
const CLIENT_METHOD = 'updateNumber';

const validResponse = { 'error-code': '200', 'error-code-label': 'success' };

export default [
  {
    label: 'update number',
    clientMethod: {
      url: [
        '/number/update',
        'POST',
        new URLSearchParams([
          ['app_id', '123abc'],
          ['country', 'US'],
          ['msisdn', '12345'],
          ['voiceCallbackType', 'app'],
          ['voiceCallbackValue', 'https://www.example.com/webhook'],
          [
            'voiceStatusCallback',
            'https://www.example.com/webhook/events',
          ],
        ]).toString(),
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        country: 'US',
        msisdn: '12345',
        applicationId: '123abc',
        voiceCallbackType: 'https://www.example.com/webhook',
        voiceStatusCallback: 'https://www.example.com/webhook/events',
      },
    ],
    expected: {
      errorCode'error-code'],
      errorCodeLabel'error-code-label'],
    },
  },
];
