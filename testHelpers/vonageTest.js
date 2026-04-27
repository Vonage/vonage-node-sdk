import { describe, test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import nock from 'nock';
import { getResults } from './getResults.js';

// Sentinel for "match anything" in expected objects
const ANYTHING_SENTINEL = Symbol('ANYTHING');
export const anything = () => ANYTHING_SENTINEL;

function customDeepEqual(actual, expected) {
  if (expected === ANYTHING_SENTINEL) return;
  if (typeof expected !== 'object' || expected === null) {
    assert.deepEqual(actual, expected);
    return;
  }
  if (Array.isArray(expected)) {
    assert.ok(Array.isArray(actual), 'Expected an array');
    assert.strictEqual(actual.length, expected.length);
    expected.forEach((v, i) => customDeepEqual(actual[i], v));
    return;
  }
  for (const key of Object.keys(expected)) {
    if (expected[key] !== ANYTHING_SENTINEL) {
      customDeepEqual(actual[key], expected[key]);
    }
  }
}

/**
 * A Wrapper function to build out tests for Vonage SDKs
 *
 * @param {Array} testDataSets - An array of test data sets
 */
export const VonageTest = (testDataSets) => {
  for (const dataSet of testDataSets) {
    describe(dataSet.name, () => {
      afterEach(() => {
        nock.cleanAll();
      });

      const successTests = dataSet.tests.filter(({ error }) => !error);
      const failureTests = dataSet.tests.filter(({ error }) => !!error);

      for (const testCase of successTests) {
        test(`Can ${testCase.label}`, async () => {
          const scope = nock(testCase.baseUrl, {
            reqheaders: testCase.reqHeaders,
          });

          testCase.requests.forEach((request, index) => {
            scope.intercept(...request).reply(...testCase.responses[index]);
          });

          const results = await getResults(
            testCase.generator,
            testCase.client,
            testCase.clientMethod,
            testCase.parameters,
          );

          customDeepEqual(results, testCase.expected);
          assert.ok(nock.isDone(), 'nock interceptors were not used');
        });
      }

      for (const testCase of failureTests) {
        test(`Will throw ${testCase.label}`, async () => {
          const scope = nock(testCase.baseUrl, {
            reqheaders: testCase.reqHeaders,
          });

          testCase.requests.forEach((request, index) => {
            scope.intercept(...request).reply(...testCase.responses[index]);
          });

          await assert.rejects(
            () => getResults(false, testCase.client, testCase.clientMethod, testCase.parameters),
            (err) => {
              const errorVal = testCase.error;
              const errMsg = typeof errorVal === 'string' ? errorVal : (errorVal && errorVal.message ? errorVal.message : String(errorVal));
              assert.ok(
                err.message === errMsg ||
                err.message.includes(errMsg) ||
                err.constructor.name === errMsg ||
                String(err) === errMsg ||
                String(err).includes(errMsg),
                `Expected error matching "${errMsg}" but got "${err.message}"`
              );
              return true;
            }
          );

          assert.ok(nock.isDone(), 'nock interceptors were not used');
        });
      }
    });
  }
};
