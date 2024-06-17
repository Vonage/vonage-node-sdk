import { SDKTestCase } from './SDKTestCase';

/**
 * TestTuple is a tuple that contains the name of the test suite and an array of SDKTestCase objects.
 */
export type TestTuple = {
  /**
   * The name of the test suite. (Used for the describe block in the test file)
   */
  name: string;

  /**
   * An array of SDKTestCase objects.
   */
  tests: Array<SDKTestCase<unknown>>;
};
