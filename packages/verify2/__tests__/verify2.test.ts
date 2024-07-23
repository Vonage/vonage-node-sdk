import { Verify2 } from '../lib';
import testDataSets from './__dataSets__';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  keyAuth,
  validateBearerAuth,
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<Verify2> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Verify2> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateBearerAuth,
        },
        requests: [test.request] as TestRequest[],
        responses: [test.response] as TestResponse[],
        client: new Verify2(keyAuth),
        clientMethod: test.clientMethod as keyof Verify2,
        parameters: test.parameters,
        generator: false,
        error: 'error' in test ? String(test.error) : false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

