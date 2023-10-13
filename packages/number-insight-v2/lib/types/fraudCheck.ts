import { PhoneInfo } from './phoneInfo';
import { FraudScore } from './fraudScore';
import { SimSwap } from './simSwap';

export type FraudCheck = {
  requestId: string;
  type: 'phone';
  phone: PhoneInfo;
  fraudScore?: FraudScore;
  simSwap?: SimSwap;
};
