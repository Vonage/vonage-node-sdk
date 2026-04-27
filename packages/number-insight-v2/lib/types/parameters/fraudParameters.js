/**
 * Represents the parameters for making a fraud check request.
 *
 * @typedef {Object} FraudCheckParameters
 * @property {'phone'} type - The type of lookup used in the request. Currently always 'phone'.
 * @property {string} phone - A single phone number that you need insight about in the E.164 format. Don't use a leading + or 00 when entering a phone number, start with the country code, e.g., 447700900000.
 * @property {Array.<Insight>} insights - The insight(s) you need, at least one of: 'fraud_score' and 'sim_swap'.
 */

export {};
