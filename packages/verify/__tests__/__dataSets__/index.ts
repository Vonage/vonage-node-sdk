import checkTests from './check';
import cancelTests from './cancel';
import searchTests from './search';
import startTests from './start';
import {
  validateApiKeyAuth,
} from '../../../../testHelpers';

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
