import { BASE_URL } from '../common';

export default [
  {
    label: 'make get request',
    request: ['/my/path', 'GET'],
    response: [
      200,
      {
        fizz: 'buzz',
      },
    ],
    clientMethod: 'sendGetRequest',
    parameters: [`${BASE_URL}/my/path`],
    expected: {
      config(),
      data: {
        fizz: 'buzz',
      },
      headers(),
      request(),
      status: 200,
      statusText: 'OK',
    },
  },
  {
    label: 'make get request with query params',
    request: ['/my/path?foo=bar', 'GET'],
    response: [
      200,
      {
        fizz: 'buzz',
      },
    ],
    clientMethod: 'sendGetRequest',
    parameters: [
      `${BASE_URL}/my/path`,
      {
        foo: 'bar',
      },
    ],
    expected: {
      config(),
      data: {
        fizz: 'buzz',
      },
      headers(),
      request(),
      status: 200,
      statusText: 'OK',
    },
  },
  {
    label: 'make get request with query params and remove undefined',
    request: ['/my/path?foo=bar', 'GET'],
    response: [
      200,
      {
        fizz: 'buzz',
      },
    ],
    clientMethod: 'sendGetRequest',
    parameters: [
      `${BASE_URL}/my/path`,
      {
        foo: 'bar',
        fizz},
    ],
    expected: {
      config(),
      data: {
        fizz: 'buzz',
      },
      headers(),
      request(),
      status: 200,
      statusText: 'OK',
    },
  },
];
