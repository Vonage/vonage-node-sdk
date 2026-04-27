import { BASE_URL } from '../common';

export default [
  {
    label: 'make post request',
    request: [
      '/my/path',
      'POST',
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
    clientMethod: 'sendPostRequest',
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
    label: 'make post form request',
    request: [
      '/my/path',
      'POST',
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
    form: 'sendFormSubmitRequest',
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
