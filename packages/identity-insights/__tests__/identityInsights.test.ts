import { IdentityInsights } from '../lib/index.js';
import testDataSets from './__dataSets__/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  validateBearerAuth,
  keyAuth,
} from '../../../testHelpers/index.js';

const applicationsTest = testDataSets.map(
  (dataSet): TestTuple<IdentityInsights> => {
    const { label, tests } = dataSet;

    return {
      name: label,
      tests: tests.map((test): SDKTestCase<IdentityInsights> => {
        return {
          label: test.label,
          baseUrl: 'https://api-eu.vonage.com',
          reqHeaders: {
            authorization: validateBearerAuth,
          },
          requests: test.requests as TestRequest[],
          responses: test.responses as TestResponse[],
          client: new IdentityInsights(keyAuth),
          clientMethod: test.clientMethod as keyof IdentityInsights,
          parameters: test.parameters,
          generator: test.generator || false,
          error: test.error || false,
          expected: test.expected,
        };
      }),
    };
  }
);

VonageTest(applicationsTest);
