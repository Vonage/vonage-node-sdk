import { Redact } from '../lib/index.js';
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
        requests: [test.request]: [test.response](apiKeyAuth),
        clientMethod: test.parameters,
        generator: 'error' in test ? String(test.error) : false,
        expected};
    }),
  };
});

VonageTest(applicationsTest);
