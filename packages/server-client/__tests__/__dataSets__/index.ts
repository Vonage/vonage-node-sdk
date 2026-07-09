import camelCase from './camelCase.js';
import snakeCase from './snakeCase.js';
import kebabCase from './kebabCase.js';

import getTests from './get.js';
import postTests from './post.js';
import putTests from './put.js';
import patchTests from './patch.js';
import deleteTests from './delete.js';


export const requestTests = [
  {
    label: 'Get requests',
    tests: getTests,
  },
  {
    label: 'Post requests',
    tests: postTests,
  },
  {
    label: 'Put requests',
    tests: putTests,
  },
  {
    label: 'Patch requests',
    tests: patchTests,
  },
  {
    label: 'Delete requests',
    tests: deleteTests,
  },
];

export const transfomTests = [
  {
    label: 'Transform Camel Case',
    tests: camelCase,
  },
  {
    label: 'Transform Snake Case',
    tests: snakeCase,
  },
  {
    label: 'Transform Kebab Case',
    tests: kebabCase,
  },
];
