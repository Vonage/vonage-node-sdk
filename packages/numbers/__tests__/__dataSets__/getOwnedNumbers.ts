const BASE_URL = 'https://rest.nexmo.com';
const CLIENT_METHOD = 'getOwnedNumbers';

const validResponse = {
  count: 1,
  numbers: [
    {
      country: 'GB',
      msisdn: '447700900000',
      moHttpUrl: 'https://example.com/webhooks/inbound-sms',
      type: 'mobile-lvn',
      features: ['VOICE', 'SMS', 'MMS'],
      messagesCallbackType: 'app',
      messagesCallbackValue: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      voiceCallbackType: 'app',
      voiceCallbackValue: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
    },
  ],
};
export default [
  {
    label: 'get owned numbers',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/account/numbers?api_key=12345&api_secret=ABCDE`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [{}],
    expected: validResponse,
  },
];
