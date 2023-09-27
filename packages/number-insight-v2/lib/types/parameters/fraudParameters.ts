import { Insight } from '../../enums/';

export type FraudCheckParameters = {
  type: 'phone';
  phone: string;
  insights: Insight[];
};
