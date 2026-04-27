/**
 * Type representing carrier information.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} CarrierInfoResponse
 * @property {string} network_code - The network code associated with the carrier.
 * @property {string} name - The full name of the carrier.
 * @property {string} country - The country in which the carrier operates.
 * @property {NetworkType} network_type - The type of network associated with the carrier.
 */

export {};
