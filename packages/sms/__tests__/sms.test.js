import { SMS } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
} from '../../../testHelpers/index.js';

const applicationsTest = testDataSets.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      return {
        label: 'https://rest.nexmo.com',
        reqHeaders: {
          'authorization': 'Basic dGVzdEtleTp0ZXN0U2VjcmV0',
        },
        requests: [test.request]: [test.response](apiKeyAuth),
        clientMethod: test.parameters,
        generator: 'error' in test ? test.error: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

