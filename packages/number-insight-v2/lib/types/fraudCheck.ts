import { PhoneInfo } from './phoneInfo.js';
import { FraudScore } from './fraudScore.js';
import { SimSwap } from './simSwap.js';

/**
 * Represents the result of a fraud check request.
 *
 * @deprecated This service is deprecated and will be turned off.
 */
export type FraudCheck = {
  /**
   * Unique UUID for this request for reference.
   */
  requestId: string;

  /**
   * The type of lookup used in the request. Currently always 'phone'.
   */
  type: 'phone';

  /**
   * An object containing information about the phone number used in the fraud check operation(s).
   */
  phone: PhoneInfo;

  /**
   * The result of the 'fraud_score' insight operation (optional).
   */
  fraudScore?: FraudScore;

  /**
   * The result of the 'sim_swap' insight operation (optional).
   */
  simSwap?: SimSwap;
};
