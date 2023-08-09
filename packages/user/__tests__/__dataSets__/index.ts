import userTests from './get';
import listTests from './list';
import createTests from './create';
import updateTests from './put';
import deleteTests from './delete';

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
