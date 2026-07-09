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
    name: label,
    tests: tests.map((test): SDKTestCase<NumberInsightV2> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateApiKeyAuth,
        },
        requests: test.requests as TestRequest[],
        responses: test.responses as TestResponse[],
        client: new NumberInsightV2(apiKeyAuth),
        clientMethod: test.clientMethod as keyof NumberInsightV2,
        parameters: test.parameters,
        generator: test.generator || false,
        error: test.error || false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);
