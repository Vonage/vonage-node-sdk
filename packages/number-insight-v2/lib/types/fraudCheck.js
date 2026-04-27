/**
 * Represents the result of a fraud check request.
 *
 * @typedef {Object} FraudCheck
 * @property {string} requestId - Unique UUID for this request for reference.
 * @property {'phone'} type - The type of lookup used in the request. Currently always 'phone'.
 * @property {PhoneInfo} phone - An object containing information about the phone number used in the fraud check operation(s).
 * @property {FraudScore} [fraudScore] - The result of the 'fraud_score' insight operation (optional).
 * @property {SimSwap} [simSwap] - The result of the 'sim_swap' insight operation (optional).
 */

export {};
