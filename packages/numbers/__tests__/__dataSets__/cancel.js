const BASE_URL = 'https://rest.nexmo.com';
const CLIENT_METHOD = 'cancelNumber';

const validResponse = { 'error-code': '200', 'error-code-label': 'success' };

export default [
  {
    label: 'cancel number',
    clientMethod: {
      url: [
        '/number/cancel',
        'POST',
        new URLSearchParams([
          ['country', 'US'],
          ['msisdn', '12345'],
          ['target_api_key', '67890'],
        ]).toString(),
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        country: 'US',
        msisdn: '12345',
        targetApiKey: '67890',
      },
    ],
    expected: {
      errorCode'error-code'],
      errorCodeLabel'error-code-label'],
    },
  },
];
