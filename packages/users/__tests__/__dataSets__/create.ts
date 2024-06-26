import { UserResponse } from '../../lib';

import { BASE_URL, testUser, testUserOne, userToApi } from '../common';

const createUser = userToApi(testUser);
delete createUser.id;
export default [
  {
    label: 'create simple user',
    requests: [
      [
        '/v1/users',
        'POST',
        {
          name: testUserOne.name,
        },
      ],
    ],
    responses: [
      [
        200,
        {
          ...userToApi(testUserOne),
          id: testUserOne.id,
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${testUserOne.id}`,
            },
          },
        } as UserResponse,
      ],
    ],
    clientMethod: 'createUser',
    parameters: [testUserOne],
    generator: false,
    error: false,
    expected: testUserOne,
  },
  {
    label: 'create user',
    requests: [['/v1/users', 'POST', createUser]],
    responses: [
      [
        200,
        {
          ...userToApi(testUser),
          id: testUser.id,
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${testUser.id}`,
            },
          },
        } as UserResponse,
      ],
    ],
    clientMethod: 'createUser',
    parameters: [testUser],
    generator: false,
    error: false,
    expected: testUser,
  },
];
