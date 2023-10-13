import { RiskRecommendation } from '../../enums';
import { FraudScore } from '../fraudScore';

export type FraudScoreResponse = {
  risk_score: string;
  risk_recommendation: RiskRecommendation;
} & Omit<FraudScore, 'riskRecommendation' | 'riskScore'>;
