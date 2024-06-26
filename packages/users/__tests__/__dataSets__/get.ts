import { Client } from '@vonage/server-client';
import { UserResponse } from '../../lib';

import { BASE_URL, testUser } from '../common';


const { websocket } = testUser.channels || {};
let webSocketResponse = {};
if (websocket) {
  webSocketResponse = {
    'content-type':  websocket[0].contentType,
    'headers': websocket[0].headers,
    'uri': websocket[0].uri,
  };
}

export default [
  {
    label: 'get user',
    requests: [[`/v1/users/${testUser.id}`, 'GET']],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(testUser, true),
          properties: {
            custom_data: {
              ...testUser.properties?.customData,
            },
          },
          channels: {
            ...testUser.channels,
            websocket: [
              webSocketResponse,
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${testUser.id}`,
            },
          },
        } as UserResponse,
      ],
    ],
    clientMethod: 'getUser',
    parameters: [testUser.id],
    generator: false,
    error: false,
    expected: testUser,
  },
];
