import { RiskRecommendation, Label, Status } from '../enums/index.js';

/**
 * Represents the result of the fraud_score insight operation.
 *
 * @deprecated This service is deprecated and will be turned off.
 */
export type FraudScore = {
  /**
   * Score derived from evaluating fraud-related data associated with the phone number.
   */
  riskScore: string;

  /**
   * Recommended action based on the riskScore.
   * Must be one of the values from the 'RiskRecommendation' enum.
   */
  riskRecommendation: RiskRecommendation;

  /**
   * Mapping of risk score to a verbose description.
   * Must be one of the values from the 'Label' enum.
   */
  label: Label;

  /**
   * The status of the fraud_score call.
   * Must be one of the values from the 'Status' enum.
   */
  status: Status;
};
