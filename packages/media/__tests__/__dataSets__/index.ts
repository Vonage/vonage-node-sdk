import getTests from './get';
import deleteTests from './delete';
import putTests from './put';

export default [
  {
    label: 'GET test',
    tests: getTests,
  },
  {
    label: 'DELETE test',
    tests: deleteTests,
  },
  {
    label: 'PUT test',
    tests: putTests,
  },
];
