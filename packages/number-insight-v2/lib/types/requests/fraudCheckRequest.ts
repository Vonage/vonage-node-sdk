import { Insight } from '../../enums';

/**
 * Represents a fraud check request.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type FraudCheckRequest = {
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
