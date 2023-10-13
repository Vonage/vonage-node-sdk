import { FraudCheck } from '../fraudCheck';
import { FraudScoreResponse } from './fraudScoreResponse';
import { SimSwap } from '../simSwap';

export type FraudCheckResponse = {
  request_id: string;
  fraud_score: FraudScoreResponse;
  sim_swap: SimSwap;
} & Omit<FraudCheck, 'requestId' | 'fraudScore' | 'simSwap'>;
