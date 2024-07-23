import nock from 'nock';

/**
 * A Tuple that contains the status code of the response and the nock interceptor function
 */
export type TestResponse = [
  /**
   * The status code of the response
   */
  number,

  /**
   * The nock interceptor body response
   *
   * This can either be the body of the response or a nock interceptor function
   */
  (nock.InterceptFunction | Record<string, unknown> | string)?,
];

/**
 * A Tuple that contains the method, path, and body of a request nock will intercept.
 */
export type TestRequest = [
  /**
   * The path of the request
   */
  string,

  /**
   * The method of the request
   */
  'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',

  /**
   * The body of the request
   */
  nock.RequestBodyMatcher?,
];

export type SDKTestCase<T> = {
  /**
   * The label for the test case
   */
  label: string;

  /**
   * The base URL for the API
   */
  baseUrl: string;

  /**
   * The headers that are expected to be sent with the request
   */
  reqHeaders?: Record<string, nock.RequestHeaderMatcher>;

  /**
   * List of Nock Responses that will be used to mock the API
   */
  responses: TestResponse[];

  /**
   * List of Nock Requests that will be used to mock the API
   */
  requests: TestRequest[];

  /**
   * The client that will be used to make the request
   */
  client: T;

  /**
   * The method that will be called on the client
   */
  clientMethod: keyof T;

  /**
   * The parameters that will be passed to the client method
   */
  parameters?: Array<unknown>;

  /**
   * Tell the test that the client method is a generator
   */
  generator: boolean;

  /**
   * Tell the test that the response is going to be an error
   */
  error: boolean | Error | string;

  /**
   * The expected response from the call to the client method
   */
  expected: unknown;
};
