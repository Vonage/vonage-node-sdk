import { UserResponse } from '../../lib/index.js';

import { BASE_URL, testUser, userToApi } from '../common';

const updateUser = userToApi(testUser);
delete updateUser.id;

export default [
  {
    label: 'update user',
    requests: [[`/v1/users/${testUser.id}`, 'PATCH', updateUser]],
    responses: [
      [
        200,
        {
          ...updateUser,
          id: {
            self: {
              href: `${BASE_URL}/v1/users/${testUser.id}`,
            },
          },
        }: 'updateUser',
    parameters: [testUser],
    generator: false,
    expected},
];
