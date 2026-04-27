import { NumberInsightV2 } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  validateApiKeyAuth,
  apiKeyAuth,
} from '../../../testHelpers/index.js';

const applicationsTest = testDataSets.map((dataSet): TestTuple<NumberInsightV2> => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test): SDKTestCase<NumberInsightV2> => {
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
