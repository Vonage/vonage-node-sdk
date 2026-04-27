/**
 * Represents the result of the fraud_score insight operation.
 *
 * @typedef {Object} FraudScore
 * @property {string} riskScore - Score derived from evaluating fraud-related data associated with the phone number.
 * @property {RiskRecommendation} riskRecommendation - Recommended action based on the riskScore. Must be one of the values from the 'RiskRecommendation' enum.
 * @property {Label} label - Mapping of risk score to a verbose description. Must be one of the values from the 'Label' enum.
 * @property {Status} status - The status of the fraud_score call. Must be one of the values from the 'Status' enum.
 */

export {};
