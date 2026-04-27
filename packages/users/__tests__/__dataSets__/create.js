import { UserResponse } from '../../lib/index.js';

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
          name},
      ],
    ],
    responses: [
      [
        200,
        {
          ...userToApi(testUserOne),
          id: {
            self: {
              href: `${BASE_URL}/v1/users/${testUserOne.id}`,
            },
          },
        }: 'createUser',
    parameters: [testUserOne],
    generator: false,
    expected},
  {
    label: 'create user',
    requests: [['/v1/users', 'POST', createUser]],
    responses: [
      [
        200,
        {
          ...userToApi(testUser),
          id: {
            self: {
              href: `${BASE_URL}/v1/users/${testUser.id}`,
            },
          },
        }: 'createUser',
    parameters: [testUser],
    generator: false,
    expected},
];
