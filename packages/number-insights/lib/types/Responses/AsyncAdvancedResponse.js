/**
 * Type representing an asynchronous advanced response from a phone number lookup operation.
 * This response may include additional details about the request and its status.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} AsyncAdvancedResponse
 * @property {string} request_id - The unique identifier for the request.
 * @property {string} number - The phone number associated with the response.
 * @property {string} remaining_balance - Your account balance in EUR after this request.
 * @property {string} request_price - The amount in EUR charged to your account for this request.
 * @property {number} status - The status code of the response.
 * @property {string} error_text - Any error text or message associated with the response.
 */

export {};
