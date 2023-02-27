import checkTests from './check';
import cancelTests from './cancel';
import searchTests from './search';
import startTests from './start';

export default [
  {
    label: 'Verify Check',
    tests: checkTests,
  },
  {
    label: 'Verify Cancel',
    tests: cancelTests,
  },
  {
    label: 'Verify Search',
    tests: searchTests,
  },
  {
    label: 'Verify Start',
    tests: startTests,
  },
];
