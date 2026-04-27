/* eslint-disable jest/no-export */
import nock from 'nock';

import { getResults } from './getResults';

/**
 * A Wrapper function to build out tests for Vonage SDKs
 *
 * @param {TestTuple} testDataSets - An array of test data sets
 */
export const VonageTest = (testDataSets) => {
  describe.each(testDataSets)('$name', ({ tests }) => {
    afterEach(function () {
      nock.cleanAll();
    });

    const successTests = tests.filter(
      ({ error }) => !error
    );

    const failureTests = tests.filter(
      ({ error }) => !!error
    );

    // JEST will error out if there are no tests to run
    test.each(successTests)(
      'Can $label',
      async ({
        baseUrl,
        reqHeaders,
        generator,
        requests,
        responses,
        client,
        clientMethod,
        parameters,
        expected
      }) => {
        const scope = nock(baseUrl, {
          reqheaders: reqHeaders
        });

        requests.forEach((request, index) => {
          scope.
          intercept(...request).
          reply(...responses[index]);
        });

        const results = await getResults(
          generator,
          client,
          clientMethod,
          parameters
        );

        expect(results).toEqual(expected);
        expect(nock.isDone()).toBeTruthy();
      }
    );

    // We might always have a failure test
    if (failureTests.length < 1) {
      return;
    }

    test.each(failureTests)(
      'Will throw $label',
      async ({
        baseUrl,
        reqHeaders,
        requests,
        responses,
        client,
        clientMethod,
        parameters,
        error
      }) => {
        const scope = nock(baseUrl, {
          reqheaders: reqHeaders
        });

        requests.forEach((request, index) => {
          scope.
          intercept(...request).
          reply(...responses[index]);
        });

        await expect(() => getResults(
          false,
          client,
          clientMethod,
          parameters
        )).rejects.toThrow(
          error
        );

        expect(nock.isDone()).toBeTruthy();
      }
    );
  });
};
