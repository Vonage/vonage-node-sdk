const BASE_URL = 'https://rest.nexmo.com';
const CLIENT_METHOD = 'buyNumber';

export default [
  {
    label: 'buy a number',
    clientMethod: {
      url: [
        '/number/buy',
        'POST',
        new URLSearchParams([
          ['country', 'US'],
          ['msisdn', '12345'],
          ['target_api_key', '67890'],
        ]).toString(),
      ],
      reply: [
        200,
        {
          'error-code': '200',
          'error-code-label': 'success',
        },
      ],
    },
    parameters: [
      {
        country: 'US',
        msisdn: '12345',
        targetApiKey: '67890',
      },
    ],
    expected: {
      errorCode: '200',
      errorCodeLabel: 'success',
    },
  },
  {
    label: 'with invalid status code',
    clientMethod: 'Request failed with status code 401',
    request: {
      url: [
        '/number/buy',
        'POST',
        new URLSearchParams([
          ['country', 'US'],
          ['msisdn', '12345'],
          ['target_api_key', '67890'],
        ]).toString(),
      ],
      reply: [
        401,
        {
          'error-code': '401',
          'error-code-label': 'Invalid auth token',
        },
      ],
    },
    parameters: [
      {
        country: 'US',
        msisdn: '12345',
        targetApiKey: '67890',
      },
    ],
    expected: {
      errorCode: '200',
      errorCodeLabel: 'success',
    },
  },
];
