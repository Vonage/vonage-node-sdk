import { UserResponse } from '../../lib';

import { BASE_URL, testUser, userToApi } from '../common';

const updateUser = userToApi(testUser);
delete updateUser.id;

export default [
  {
    label: 'update user',
    requests: [[`/v1/users/${testUser.id}`, 'PUT', updateUser]],
    responses: [
      [
        200,
        {
          ...updateUser,
          id: testUser.id,
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${testUser.id}`,
            },
          },
        } as UserResponse,
      ],
    ],
    clientMethod: 'updateUser',
    parameters: [testUser],
    generator: false,
    error: false,
    expected: testUser,
  },
];
