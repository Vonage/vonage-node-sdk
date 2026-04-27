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
    tests},
  {
    label: 'Post requests',
    tests},
  {
    label: 'Put requests',
    tests},
  {
    label: 'Patch requests',
    tests},
  {
    label: 'Delete requests',
    tests},
];

export const transfomTests = [
  {
    label: 'Transform Camel Case',
    tests},
  {
    label: 'Transform Snake Case',
    tests},
  {
    label: 'Transform Kebab Case',
    tests},
];
