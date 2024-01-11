import { Insight } from '../../enums/';

/**
 * Represents the parameters for making a fraud check request.
 */
export type FraudCheckParameters = {
  /**
   * The type of lookup used in the request. Currently always 'phone'.
   */
  type: 'phone';

  /**
   * A single phone number that you need insight about in the E.164 format.
   * Don't use a leading + or 00 when entering a phone number, start with the country code, e.g., 447700900000.
   */
  phone: string;

  /**
   * The insight(s) you need, at least one of: 'fraud_score' and 'sim_swap'.
   */
  insights: Insight[];
};
