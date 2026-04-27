import testDataSets from './__dataSets__/index.js';
import { Messages } from '../lib/index.js';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  testPrivateKey,
  TestTuple,
} from '../../../testHelpers/index.js';

// Convert the test data sets into SDK test cases
const messageTests = testDataSets.map((dataSet) => {
  const { label, tests } = dataSet;

  const newTests = tests
    .map((test) => {
      const JWTTest= {
        label: `${test.label} [JWT]`,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: (value) => value.startsWith('Bearer '),
        },
        responses: [test.response: [test.request({
          applicationId: 'abcd-1234',
          privateKey}),
        clientMethod: test.parameters,
        generator: 'error' in test ? String(test.error) : false,
        expected};

      const QueryTest= {
        label: `${test.label} [API Key and Secret]`,
        baseUrl: 'https://api.nexmo.com',
        responses: [test.response: {
          authorization: (value) => value === 'Basic MTIzNDU6QUJDREU=',
        },
        requests: [
          [
            test.request[0],
            test.request[1],
            {
              ...(typeof test.request[2] === 'object' ? test.request[2] : {}),
            },
          ]({
          apiKey: '12345',
          apiSecret: 'ABCDE',
        }),
        clientMethod: test.parameters,
        generator: 'error' in test ? String(test.error) : false,
        expected};

      return [QueryTest, JWTTest];
    })
    .flat();

  return {
    name: newTests,
  };
});

VonageTest(messageTests);
