import { FraudCheck } from '../fraudCheck.js';
import { FraudScoreResponse } from './fraudScoreResponse.js';
import { SimSwap } from '../simSwap.js';

/**
 * Represents the response from a fraud check request.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type FraudCheckResponse = {
  /**
   * Unique UUID for this request for reference.
   */
  request_id: string;

  /**
   * The response data for the 'fraud_score' insight operation.
   */
  fraud_score: FraudScoreResponse;

  /**
   * The response data for the 'sim_swap' insight operation.
   */
  sim_swap: SimSwap;
} & Omit<FraudCheck, 'requestId' | 'fraudScore' | 'simSwap'>;
