import { Verify } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
} from '../../../testHelpers/index.js';


const verifyTest = testDataSets.map((dataSet): TestTuple<Verify> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Verify> => {
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
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

VonageTest(verifyTest);

