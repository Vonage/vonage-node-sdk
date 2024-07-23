import { Verify } from '../lib';
import testDataSets from './__dataSets__';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<Verify> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Verify> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
        },
        requests: [test.request] as TestRequest[],
        responses: [test.response] as TestResponse[],
        client: new Verify(apiKeyAuth),
        clientMethod: test.clientMethod as keyof Verify,
        parameters: test.parameters,
        generator: false,
        error: false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

