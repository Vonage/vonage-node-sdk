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
      reply: [
        200,
        validResponse,
        { 'Content-Type': 'application/json;charset=utf-8' },
      ],
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
  {
    label: 'search with "startsWith"',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=1234&search_pattern=0&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        startsWith: '1234',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
  {
    label: 'serach with "endsWith"',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=1234&search_pattern=2&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        endsWith: '1234',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
  {
    label: 'serach with "contains"',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=1234&search_pattern=1&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        contains: '1234',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
  {
    label: 'search with "contains" taking precedent',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=1234&search_pattern=1&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        endsWith: '0987',
        startsWith: '6543',
        contains: '1234',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
  {
    label: 'search with "endsWith" taking precedent',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=0987&search_pattern=2&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        endsWith: '0987',
        startsWith: '6543',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
  {
    label: 'search with "pattern" overriding easy search',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=5309&search_pattern=0&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        endsWith: '0987',
        startsWith: '6543',
        contains: '1234',
        searchPattern: 0,
        pattern: '5309',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
  {
    label: 'search using default "contains" for "search_pattern"',
    clientMethod: CLIENT_METHOD,
    request: {
      url: BASE_URL,
      intercept: [
        `/number/search?api_key=12345&api_secret=ABCDE&pattern=5309&search_pattern=1&country=US`,
        'GET',
      ],
      reply: [200, validResponse],
    },
    parameters: [
      {
        pattern: '5309',
        country: 'US',
      },
    ],
    expected: validResponse,
  },
];
