import { Media } from '../lib';
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

const mediaTests = testDataSets.map((dataSet): TestTuple<Media> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Media> => {
      const useGenerator = 'generator' in test ? Boolean(test.generator) : false;
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: validateBearerAuth,
        },
        requests: test.requests as TestRequest[],
        responses: test.responses as TestResponse[],
        client: new Media(keyAuth),
        clientMethod: test.clientMethod as keyof Media,
        parameters: test.parameters,
        generator: useGenerator,
        error: false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(mediaTests);
