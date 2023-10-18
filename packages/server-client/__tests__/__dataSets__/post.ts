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
      config: expect.anything(),
      data: {
        fizz: 'buzz',
      },
      headers: expect.anything(),
      request: expect.anything(),
      status: 200,
      statusText: 'OK',
    },
  },
  {
    label: 'make web post request',
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
    form: true,
    clientMethod: 'sendFormSubmitRequest',
    parameters: [
      `${BASE_URL}/my/path`,
      {
        foo: 'bar',
      },
    ],
    expected: {
      config: expect.anything(),
      data: {
        fizz: 'buzz',
      },
      headers: expect.anything(),
      request: expect.anything(),
      status: 200,
      statusText: 'OK',
    },
  },
];
