import postTests from './post.js';
import getTests from './get.js';
import putTests from './put.js';
import deleteTests from './delete.js';
import patchTests from './patch.js';

export default [
  {
    label: 'GET tests',
    tests: getTests,
  },
  {
    label: 'POST tests',
    tests: postTests,
  },
  {
    label: 'PUT tests',
    tests: putTests,
  },
  {
    label: 'PATCH tests',
    tests: patchTests,
  },
  {
    label: 'DELETE tests',
    tests: deleteTests,
  },
];
