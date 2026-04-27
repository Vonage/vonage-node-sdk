/**
 * Represents the response data for the 'fraud_score' insight operation.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} FraudScoreResponse
 * @property {string} risk_score - Score derived from evaluating fraud-related data associated with the phone number.
 * @property {RiskRecommendation} risk_recommendation - Recommended action based on the risk_score. Must be one of the values from the 'RiskRecommendation' enum.
 */

export {};
