import { Auth } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestTuple,
} from '../../../testHelpers/index.js';

const authTests = testDataSets.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      const willError = 'error' in test ? test.error;
      return {
        label: 'https://api.nexmo.com',
        reqHeaders: {},
        requests: [],
        responses: [],
        client(test.authParameters),
        clientMethod: test.parameters,
        error: test.expected,
        generator};
    })
  };
});

VonageTest(authTests);

