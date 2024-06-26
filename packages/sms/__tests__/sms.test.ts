import { SMS } from '../lib';
import testDataSets from './__dataSets__';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<SMS> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<SMS> => {
      return {
        label: test.label,
        baseUrl: 'https://rest.nexmo.com',
        requests: [test.request] as TestRequest[],
        responses: [test.response] as TestResponse[],
        client: new SMS(apiKeyAuth),
        clientMethod: test.clientMethod as keyof SMS,
        parameters: test.parameters,
        generator: false,
        error: 'error' in test ? test.error as Error : false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

