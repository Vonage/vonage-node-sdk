import { Users } from '../lib';
import testDataSets from './__dataSets__';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  keyAuth,
  validateBearerAuth
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<Users> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Users> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateBearerAuth,
        },
        requests: test.requests as TestRequest[],
        responses: test.responses as TestResponse[],
        client: new Users(keyAuth),
        clientMethod: test.clientMethod as keyof Users,
        parameters: test.parameters,
        generator: test.generator || false,
        error: test.error || false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

