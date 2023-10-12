import { RiskRecommendation } from '../../enums';
import { FraudScore } from '../fraudScore';

/**
 * Represents the response data for the 'fraud_score' insight operation.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type FraudScoreResponse = {
  /**
   * Score derived from evaluating fraud-related data associated with the phone number.
   */
  risk_score: string;

  /**
   * Recommended action based on the risk_score.
   * Must be one of the values from the 'RiskRecommendation' enum.
   */
  risk_recommendation: RiskRecommendation;
} & Omit<FraudScore, 'riskRecommendation' | 'riskScore'>;
