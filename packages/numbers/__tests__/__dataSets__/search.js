import { Feature } from '../../lib/enums';
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
    clientMethod: {
      url: ['/number/search?', 'GET'],
      reply: [
        200,
        validResponse,
        { 'Content-Type': 'application/json;charset=utf-8' },
      ],
    },
    parameters: [{}],
    expected},
  {
    label: 'search for numbers and joins with one element',
    clientMethod: {
      url: [
        `/number/search?country=US&features=${Feature.MMS}`,
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
    expected},
  {
    label: 'search for numbers and joins with two elements',
    clientMethod: {
      url: [
        `/number/search?country=US&features=${Feature.VOICE},${Feature.MMS}`,
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
    expected},
  {
    label: 'search for numbers and joins with three elements',
    clientMethod: {
      url: [
        `/number/search?country=US&features=${Feature.SMS},${Feature.MMS},${Feature.VOICE}`,
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
    expected},
  {
    label: 'search with "startsWith"',
    clientMethod: {
      url: [
        '/number/search?pattern=1234&search_pattern=0&country=US',
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
    expected},
  {
    label: 'serach with "endsWith"',
    clientMethod: {
      url: [
        '/number/search?pattern=1234&search_pattern=2&country=US',
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
    expected},
  {
    label: 'serach with "contains"',
    clientMethod: {
      url: [
        '/number/search?pattern=1234&search_pattern=1&country=US',
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
    expected},
  {
    label: 'search with "contains" taking precedent',
    clientMethod: {
      url: [
        '/number/search?pattern=1234&search_pattern=1&country=US',
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
    expected},
  {
    label: 'search with "endsWith" taking precedent',
    clientMethod: {
      url: [
        '/number/search?pattern=0987&search_pattern=2&country=US',
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
    expected},
  {
    label: 'search with "pattern" overriding easy search',
    clientMethod: {
      url: [
        '/number/search?pattern=5309&search_pattern=0&country=US',
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
    expected},
  {
    label: 'search using default "contains" for "search_pattern"',
    clientMethod: {
      url: [
        '/number/search?pattern=5309&search_pattern=1&country=US',
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
    expected},
];
