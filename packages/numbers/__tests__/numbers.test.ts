import { Numbers } from '../lib';
import dataSet from './__dataSets__';
import { URL } from 'url';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
} from '../../../testHelpers';

const applicationsTest = dataSet.map((dataSet): TestTuple<Numbers> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Numbers> => {
      const requestUrl = new URL(`${test.request.url}${test.request.intercept[0]}`);
      return {
        label: test.label,
        baseUrl: 'https://rest.nexmo.com',
        reqHeaders: {
          'authorization': 'Basic dGVzdEtleTp0ZXN0U2VjcmV0',
        },
        requests: [
          [
            `${requestUrl.pathname}${requestUrl.search.toString()}`,
            test.request.intercept[1],
            test.request.intercept[2],
          ] as TestRequest
        ],
        responses: [
          test.request.reply as TestResponse
        ],
        client: new Numbers(apiKeyAuth),
        clientMethod: test.clientMethod as keyof Numbers,
        parameters: test.parameters,
        generator: 'generator' in test ? Boolean(test.generator) : false,
        error: 'exception' in test ? String(test.exception) : false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);
