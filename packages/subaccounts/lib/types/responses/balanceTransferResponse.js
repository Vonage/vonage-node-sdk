/**
 * Type definition for the response representing a balance transfer, which includes properties such as
 * `balance_transfer_id` and `created_at`. This type combines properties from the balance transfer response with the
 * properties of a `BalanceTransfer` (excluding specific properties).
 * Vonage API's will return information using `snake_case`. This represents the pure response before the client will
 * transform the keys into `camelCase`.
 *
 * @typedef {Object} BalanceTransferResponse
 * @property {string} balance_transfer_id - The unique identifier for the balance transfer.
 * @property {string} created_at - The date and time when the balance transfer was executed.
 */

export {};
