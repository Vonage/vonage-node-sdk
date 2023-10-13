import { RiskRecommendation, Label, Status } from '../enums';

export type FraudScore = {
  riskScore: string;
  riskRecommendation: RiskRecommendation;
  label: Label;
  status: Status;
};
