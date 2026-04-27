/**
 * Type definition for the response representing a page of subaccounts, which
 * includes properties such as `total_balance`, `total_credit_limit`,
 * `_embedded` with `primary_account`, `subaccounts`, and APILinks.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} SubAccountResponsePage
 * @property {number} total_balance - The total balance of the subaccounts.
 * @property {number} total_credit_limit - The total credit limit of the subaccounts.
 * @property {Object} _embedded - An object containing the primary account information and an array of `subaccounts`.
 */

export {};
