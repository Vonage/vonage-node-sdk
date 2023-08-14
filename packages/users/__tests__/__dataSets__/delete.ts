import { testUser } from '../common';

export default [
  {
    label: 'delete simple user',
    requests: [[`/v1/users/${testUser.id}`, 'DELETE']],
    responses: [[204]],
    clientMethod: 'deleteUser',
    parameters: [testUser.id],
    generator: false,
    error: false,
    expected: undefined,
  },
];
