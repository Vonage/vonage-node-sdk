import { SubAccounts } from '../lib';
import testDataSets from './__dataSets__';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
  validateApiKeyAuth,
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<SubAccounts> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<SubAccounts> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateApiKeyAuth,
        },
        requests: test.requests as TestRequest[],
        responses: test.responses as TestResponse[],
        client: new SubAccounts(apiKeyAuth),
        clientMethod: test.clientMethod as keyof SubAccounts,
        parameters: test.parameters,
        generator: false,
        error: test.error || false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

