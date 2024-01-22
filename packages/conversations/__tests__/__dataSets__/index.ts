import postTests from './post';
import getTests from './get';
import putTests from './put';
import deleteTests from './delete';
import patchTests from './patch';

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
