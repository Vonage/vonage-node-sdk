import { PhoneInfo } from './phoneInfo';
import { FraudScore } from './fraudScore';
import { SimSwap } from './simSwap';

/**
 * Represents the result of a fraud check request.
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
