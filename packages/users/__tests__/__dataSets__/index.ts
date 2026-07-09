import userTests from './get.js';
import listTests from './list.js';
import createTests from './create.js';
import updateTests from './put.js';
import deleteTests from './delete.js';

export default [
  {
    label: 'Get User',
    tests: userTests,
  },
  {
    label: 'List Users',
    tests: listTests,
  },
  {
    label: 'Create User',
    tests: createTests,
  },
  {
    label: 'Update User',
    tests: updateTests,
  },
  {
    label: 'Delete User',
    tests: deleteTests,
  },
];
