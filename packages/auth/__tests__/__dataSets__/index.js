import jwtTests from './jwt.js';
import basicTests from './basic.js';
import queryTests from './query.js';
import signatureTests from './signature.js';

export default [
  {
    label: 'JWT',
    tests},
  {
    label: 'Basic Auth',
    tests},
  {
    label: 'Query Params',
    tests},
  {
    label: 'Signature Hash',
    tests},
];
