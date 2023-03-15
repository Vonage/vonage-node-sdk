import requestTests from './verify';
import checkTests from './check';

export default [
  {
    label: 'Request tests',
    tests: requestTests,
  },
  {
    label: 'Check tests',
    tests: checkTests,
  },
];
