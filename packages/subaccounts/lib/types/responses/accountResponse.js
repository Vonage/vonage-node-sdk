/**
 * Type definition for the response representing an account, which includes
 * properties such as `api_key`, `created_at`, `balance`, and `credit_limit`.
 * This type combines properties from the account response with the properties
 * of a subaccount (excluding specific subaccount-related properties).
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} AccountResponse
 * @property {string} api_key - The API key associated with the account.
 * @property {string} created_at - The creation date and time of the account.
 * @property {number} balance - The balance of the account.
 * @property {number} credit_limit - The credit limit of the account.
 */

export {};
