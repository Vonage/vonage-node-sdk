import testDataSets from './__dataSets__/';
import { Messages } from '../lib';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  testPrivateKey,
  TestTuple,
} from '../../../testHelpers';

// Convert the test data sets into SDK test cases
const messageTests = testDataSets.map((dataSet): TestTuple<Messages> => {
  const { label, tests } = dataSet;

  const newTests = tests
    .map((test): SDKTestCase<Messages>[] => {
      const JWTTest: SDKTestCase<Messages> = {
        label: `${test.label} [JWT]`,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: (value: string) => value.startsWith('Bearer '),
        },
        responses: [test.response as TestResponse],
        requests: [test.request as TestRequest],
        client: new Messages({
          applicationId: 'abcd-1234',
          privateKey: testPrivateKey,
        }),
        clientMethod: test.clientMethod as keyof Messages,
        parameters: test.parameters,
        generator: false,
        error: 'error' in test ? String(test.error) : false,
        expected: test.expected,
      };

      const QueryTest: SDKTestCase<Messages> = {
        label: `${test.label} [API Key and Secret]`,
        baseUrl: 'https://api.nexmo.com',
        responses: [test.response as TestResponse],
        reqHeaders: {
          authorization: (value: string) => value === 'Basic MTIzNDU6QUJDREU=',
        },
        requests: [
          [
            test.request[0],
            test.request[1],
            {
              ...(typeof test.request[2] === 'object' ? test.request[2] : {}),
            },
          ] as TestRequest,
        ],
        client: new Messages({
          apiKey: '12345',
          apiSecret: 'ABCDE',
        }),
        clientMethod: test.clientMethod as keyof Messages,
        parameters: test.parameters,
        generator: false,
        error: 'error' in test ? String(test.error) : false,
        expected: test.expected,
      };

      return [QueryTest, JWTTest];
    })
    .flat();

  return {
    name: label,
    tests: newTests,
  };
});

VonageTest(messageTests);
