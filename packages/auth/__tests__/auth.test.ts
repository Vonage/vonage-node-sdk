import { jest } from '@jest/globals';
import { Auth } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestTuple,
} from '../../../testHelpers/index.js';


jest.useFakeTimers();
jest.setSystemTime(10907902800000);

const authTests = testDataSets.map((dataSet): TestTuple<Auth> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Auth> => {
      const willError = 'error' in test ? test.error : false;
      return {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {},
        requests: [],
        responses: [],
        client: new Auth(test.authParameters),
        clientMethod: test.method as keyof Auth,
        parameters: test.parameters,
        error: willError || false,
        expected: test.expected,
        generator: false,
      };
    })
  };
});

VonageTest(authTests);

