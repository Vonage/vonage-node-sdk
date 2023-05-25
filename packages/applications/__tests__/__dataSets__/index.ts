import appTests from './get';
import listTests from './list';
import createTests from './create';
import updateTests from './update';
import deleteTests from './delete';

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
