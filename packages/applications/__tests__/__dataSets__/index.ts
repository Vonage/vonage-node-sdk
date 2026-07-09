import appTests from './get.js';
import listTests from './list.js';
import createTests from './create.js';
import updateTests from './update.js';
import deleteTests from './delete.js';

export default [
  {
    label: 'Get Application',
    tests: appTests,
  },
  {
    label: 'List Applications',
    tests: listTests,
  },
  {
    label: 'Create Application',
    tests: createTests,
  },
  {
    label: 'Update Application',
    tests: updateTests,
  },
  {
    label: 'Delete Application',
    tests: deleteTests,
  },
];
