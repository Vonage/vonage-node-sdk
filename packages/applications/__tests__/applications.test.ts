import testDataSets from './__dataSets__/';
import { Applications } from '../lib';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
  validateApiKeyAuth,
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<Applications> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Applications> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateApiKeyAuth,
        },
        requests: test.requests as TestRequest[],
        responses: test.responses as TestResponse[],
        client: new Applications(apiKeyAuth),
        clientMethod: test.clientMethod as keyof Applications,
        parameters: test.parameters,
        generator: test.generator || false,
        error: test.error || false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

