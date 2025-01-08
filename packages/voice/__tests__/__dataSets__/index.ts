import callTests from './calls';
import createTests from './create';
import updateTests from './update';
import deleteTests from './delete';

export default [
  {
    label: 'Read calls',
    tests: callTests,
  },
  {
    label: 'Create call',
    tests: createTests,
  },
  {
    label: 'Update call',
    tests: updateTests,
  },
  {
    label: 'Delete call',
    tests: deleteTests,
  },
];
