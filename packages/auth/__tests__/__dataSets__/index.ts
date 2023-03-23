import jwtTests from './jwt';
import basicTests from './basic';
import queryTests from './query';
import signatureTests from './signature';

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
