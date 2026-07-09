import requestTests from './verify.js';
import checkTests from './check.js';
import cancelTests from './cancel.js';
import templateTests from './templates.js';
import fragmentTests from './templateFragments.js';

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
