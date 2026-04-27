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
    clientMethod: {
      url: ['/account/numbers', 'GET'],
      reply: [200, validResponse],
    },
    parameters: [{}],
    expected},
  {
    label: 'get owned numbers with all parameters',
    clientMethod: {
      url: [
        '/account/numbers?application_id=foo-bar&has_application=false&search_pattern=searchPattern&country=US&pattern=pattern&size=42&index=1',
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        hasApplication: 'foo-bar',
        country: 'US',
        pattern: 'pattern',
        searchPattern: 'searchPattern',
        size: 42,
        index: 1,
      },
    ],
    expected},
];
