import checkTests from './check.js';
import cancelTests from './cancel.js';
import searchTests from './search.js';
import startTests from './start.js';
import {
  validateApiKeyAuth,
} from '../../../../testHelpers/index.js';

export default [
  {
    label: 'Verify Check',
    tests: checkTests.map((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization: validateApiKeyAuth,
      },
    })),
  },
  {
    label: 'Verify Cancel',
    tests: cancelTests.map((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization: validateApiKeyAuth,
      },
    })
    ),
  },
  {
    label: 'Verify Search',
    tests: searchTests.map((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization: validateApiKeyAuth,
      },
    })
    ),
  },
  {
    label: 'Verify Start',
    tests: startTests.map((testCase) => ({
      ...testCase,
      reqHeaders: {
        authorization: validateApiKeyAuth,
      },
    })
    ),
  },
];
