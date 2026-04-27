/**
 * Represents the response from a fraud check request.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} FraudCheckResponse
 * @property {string} request_id - Unique UUID for this request for reference.
 * @property {FraudScoreResponse} fraud_score - The response data for the 'fraud_score' insight operation.
 * @property {SimSwap} sim_swap - The response data for the 'sim_swap' insight operation.
 */

export {};
