import { BASE_URL } from '../common';

export default [
  {
    label: 'make put request',
    request: [
      '/my/path',
      'PUT',
      {
        foo: 'bar',
      },
    ],
    response: [
      200,
      {
        fizz: 'buzz',
      },
    ],
    clientMethod: 'sendPutRequest',
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
];
