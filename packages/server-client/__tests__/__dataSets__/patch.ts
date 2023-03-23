import { BASE_URL } from '../common';

export default [
  {
    label: 'make patch request',
    request: [
      '/my/path',
      'PATCH',
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
    clientMethod: 'sendPatchRequest',
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
