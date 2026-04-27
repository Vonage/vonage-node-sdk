/**
 * Represents a fraud check request.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} FraudCheckRequest
 * @property {'phone'} type - The type of lookup used in the request. Currently always 'phone'.
 * @property {string} phone - A single phone number that you need insight about in the E.164 format. Don't use a leading + or 00 when entering a phone number, start with the country code, e.g., 447700900000.
 * @property {Array.<Insight>} insights - The insight(s) you need, at least one of: 'fraud_score' and 'sim_swap'.
 */

export {};
