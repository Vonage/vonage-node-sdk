import { Media } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  keyAuth,
  validateBearerAuth,
} from '../../../testHelpers/index.js';

const mediaTests = testDataSets.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      const useGenerator = 'generator' in test ? Boolean(test.generator) : false;
      return {
        label: 'https://api.nexmo.com',
        reqHeaders: {
          authorization},
        requests: test.responses(keyAuth),
        clientMethod: test.parameters,
        generator: false,
        expected};
    }),
  };
});

VonageTest(mediaTests);
