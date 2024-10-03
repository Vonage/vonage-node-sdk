import requestTests from './verify';
import checkTests from './check';
import cancelTests from './cancel';
import templateTests from './templates';
import fragmentTests from './templateFragments';

export default [
  {
    name: 'Request tests',
    tests: requestTests,
  },
  {
    name: 'Check tests',
    tests: checkTests,
  },
  {
    name: 'Cancel tests',
    tests: cancelTests,
  },
  {
    name: 'Templates tests',
    tests: templateTests,
  },
  {
    name: 'Template Fragment tests',
    tests: fragmentTests,
  }
];
