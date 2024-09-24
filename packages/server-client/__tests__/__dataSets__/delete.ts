import { BASE_URL } from '../common';

export default [
  {
    label: 'make delete request',
    request: ['/my/path', 'DELETE'],
    response: [
      200,
      {
        fizz: 'buzz',
      },
    ],
    clientMethod: 'sendDeleteRequest',
    parameters: [`${BASE_URL}/my/path`],
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
    label: 'make delete request with content-type header but no body',
    request: ['/my/path', 'DELETE'],
    response: [
      204,
      null,
      undefined,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ],
    clientMethod: 'sendDeleteRequest',
    parameters: [`${BASE_URL}/my/path`],
    expected: {
      config: expect.anything(),
      data: null,
      headers: expect.anything(),
      request: expect.anything(),
      status: 204,
      statusText: 'No Content',
    },
  },
];
