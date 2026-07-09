import jwtTests from './jwt.js';
import basicTests from './basic.js';
import queryTests from './query.js';
import signatureTests from './signature.js';

export default [
  {
    label: 'JWT',
    tests: jwtTests,
  },
  {
    label: 'Basic Auth',
    tests: basicTests,
  },
  {
    label: 'Query Params',
    tests: queryTests,
  },
  {
    label: 'Signature Hash',
    tests: signatureTests,
  },
];
