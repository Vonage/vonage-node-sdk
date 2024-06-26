/* eslint-disable jest/no-export */
import nock from 'nock';
import { SDKTestCase, TestTuple } from './types';
import { getResults } from './getResults';

/**
 * A Wrapper function to build out tests for Vonage SDKs
 *
 * @param {TestTuple} testDataSets - An array of test data sets
 */
export const VonageTest = <T>(testDataSets: TestTuple<T>[]) => {
  describe.each<TestTuple<T>>(testDataSets)('$name', ({ tests }) => {
    afterEach(function () {
      nock.cleanAll();
    });

    const successTests = tests.filter(
      ({ error }) => !error,
    );

    const failureTests = tests.filter(
      ({ error }) => !!error,
    );


    // JEST will error out if there are no tests to run
    test.each<SDKTestCase<T>>(successTests)(
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
        expected,
      }) => {
        const scope = nock(baseUrl, {
          reqheaders: reqHeaders,
        });

        requests.forEach((request, index) => {
          (scope as nock.Scope)
            .intercept(...request)
            .reply(...responses[index]);
        });

        const results = await getResults<T>(
          generator,
          client,
          clientMethod,
          parameters,
        );

        expect(results).toEqual(expected);
        expect(nock.isDone()).toBeTruthy();
      },
    );

    // We might always have a failure test
    if (failureTests.length < 1) {
      return;
    }

    test.each<SDKTestCase<T>>(failureTests)(
      'Will throw $label',
      async ({
        baseUrl,
        reqHeaders,
        requests,
        responses,
        client,
        clientMethod,
        parameters,
        error,
      }) => {
        const scope = nock(baseUrl, {
          reqheaders: reqHeaders,
        });

        requests.forEach((request, index) => {
          (scope as nock.Scope)
            .intercept(...request)
            .reply(...responses[index]);
        });

        await expect(() => getResults<T>(
          false,
          client,
          clientMethod,
          parameters,
        )).rejects.toThrow(
          error as Error,
        );

        expect(nock.isDone()).toBeTruthy();
      },
    );
  });
};
