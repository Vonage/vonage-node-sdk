/**
 * A Tuple that contains the status code of the response and the nock interceptor function
 *
 * @typedef {Object} TestResponse
 */

/**
 * A Tuple that contains the method, path, and body of a request nock will intercept.
 *
 * @typedef {Object} TestRequest
 */

/**
 * @typedef {Object} SDKTestCase
 * @property {string} label - The label for the test case
 * @property {string} baseUrl - The base URL for the API
 * @property {Record} [reqHeaders] - The headers that are expected to be sent with the request
 * @property {Array.<TestResponse>} responses - List of Nock Responses that will be used to mock the API
 * @property {Array.<TestRequest>} requests - List of Nock Requests that will be used to mock the API
 * @property {T} client - The client that will be used to make the request
 * @property {keyof T} clientMethod - The method that will be called on the client
 * @property {Array} [parameters] - The parameters that will be passed to the client method
 * @property {boolean} generator - Tell the test that the client method is a generator
 * @property {boolean | Error | string} error - Tell the test that the response is going to be an error
 * @property {*} expected - The expected response from the call to the client method
 */

export {};
