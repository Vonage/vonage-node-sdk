import checkTests from './check.js';
import cancelTests from './cancel.js';
import searchTests from './search.js';
import startTests from './start.js';
import {
  validateApiKeyAuth,
} from '../../../../testHelpers';

export default [
  {
    label: 'Verify Check',
    tests((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization},
    })),
  },
  {
    label: 'Verify Cancel',
    tests((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization},
    })
    ),
  },
  {
    label: 'Verify Search',
    tests((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization},
    })
    ),
  },
  {
    label: 'Verify Start',
    tests((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization},
    })
    ),
  },
];
