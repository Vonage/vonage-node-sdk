import camelCase from './camelCase';
import snakeCase from './snakeCase';
import getTests from './get';
import postTests from './post';
import putTests from './put';
import patchTests from './patch';
import deleteTests from './delete';

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
];
