import { SubAccounts } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
  validateApiKeyAuth,
} from '../../../testHelpers/index.js';

const applicationsTest = testDataSets.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      return {
        label: 'https://api.nexmo.com',
        reqHeaders: {
          authorization},
        requests: test.responses(apiKeyAuth),
        clientMethod: test.parameters,
        generator: test.error || false,
        expected};
    }),
  };
});

VonageTest(applicationsTest);

