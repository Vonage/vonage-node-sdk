/* eslint-disable jest/no-export */
import nock from 'nock';
import { SDKTestCase, TestTuple } from './types';
import { getResults } from './getResults';

/**
 * A Wrapper function to build out tests for Vonage SDKs
 *
 * @param {TestTuple} testDataSets - An array of test data sets
 */
export const VonageTest = <T>(testDataSets: TestTuple[]) => {
  describe.each<TestTuple>(testDataSets)('$label', ({ tests }) => {
    test.each<SDKTestCase<T>>(tests)(
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

        expect(results).toEqual(expected);
        expect(nock.isDone()).toBeTruthy();
      },
    );
  });
};
