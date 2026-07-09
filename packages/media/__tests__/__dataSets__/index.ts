import getTests from './get.js';
import deleteTests from './delete.js';
import putTests from './put.js';

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
