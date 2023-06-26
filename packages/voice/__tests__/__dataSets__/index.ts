import callTests from './calls';
import createTests from './create';
import updateTests from './update';

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
];
