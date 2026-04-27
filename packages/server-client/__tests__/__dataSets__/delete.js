import { anything } from '../../../../testHelpers/index.js';
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
      config(),
      data: anything(),
      request(),
      status: 204,
      statusText: 'No Content',
    },
  },
];
