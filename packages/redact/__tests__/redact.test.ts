import { Redact } from '../lib';
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

const applicationsTest = testDataSets.map((dataSet): TestTuple<Redact> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Redact> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateApiKeyAuth,
        },
        requests: [test.request] as TestRequest[],
        responses: [test.response] as TestResponse[],
        client: new Redact(apiKeyAuth),
        clientMethod: test.clientMethod as keyof Redact,
        parameters: test.parameters,
        generator: false,
        error: 'error' in test ? String(test.error) : false,
        expected: undefined,
      };
    }),
  };
});

VonageTest(applicationsTest);
