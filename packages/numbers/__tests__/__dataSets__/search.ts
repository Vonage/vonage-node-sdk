import { Feature } from '../../lib/enums/Feature';
const BASE_URL = 'https://rest.nexmo.com';
const CLIENT_METHOD = 'getAvailableNumbers';

const validResponse = {
  count: 1,
  numbers: [
    {
      country: 'GB',
      msisdn: '447700900000',
      type: 'mobile-lvn',
      cost: '1.25',
      features: ['VOICE', 'SMS', 'MMS'],
    },
  ],
};
export default [
  {
    label: 'get available numbers',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [`/number/search?api_key=12345&api_secret=ABCDE`, 'GET'],
      reply: [200, validResponse],
    },
    parameters: [{}],
    expected: validResponse,
  },
  {
    label: 'search for numbers and joins with one element',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&country=US&features=${Feature.MMS}`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        country: 'US',
        features: [Feature.MMS],
      },
    ],
    expected: validResponse,
  },
  {
    label: 'search for numbers and joins with two elements',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&country=US&features=${Feature.VOICE},${Feature.MMS}`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        country: 'US',
        features: [Feature.MMS, Feature.VOICE],
      },
    ],
    expected: validResponse,
  },
  {
    label: 'search for numbers and joins with three elements',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&country=US&features=${Feature.SMS},${Feature.MMS},${Feature.VOICE}`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        country: 'US',
        features: [Feature.MMS, Feature.VOICE, Feature.SMS],
      },
    ],
    expected: validResponse,
  },
];
