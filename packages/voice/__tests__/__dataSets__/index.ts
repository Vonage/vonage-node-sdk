import callTests from './calls.js';
import createTests from './create.js';
import updateTests from './update.js';
import deleteTests from './delete.js';

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
