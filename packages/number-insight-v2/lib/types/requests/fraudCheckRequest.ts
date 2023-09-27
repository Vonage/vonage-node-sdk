import { Insight } from '../../enums';

export type FraudCheckRequest = {
  type: 'phone';
  phone: string;
  insights: Insight[];
};
