import { MatchType } from './match.js';

/**
 * Represents the parameters for makeing an identity insights call
 *
 */
export type IdentityInsightsParameters = {

  /**
   * A single phone number that you need insight about in the E.164 format.
   * Don't use a leading + or 00 when entering a phone number, start with the country code, e.g., 447700900000.
   */
  phone_number: string;

  /**
   * Specifies the reason for the request. This property is required only for Insights that use the
   * Network Registry. The value must be "FraudPreventionAndDetection".
   */
  purpose: "FraudPreventionAndDetection";

  /**
   * The insight(s) you need. At least one insight must be requested.
   */
  insights?: {

    /**
     * Request the format insight.
     */
    format?: Record<string, never>;

    /**
     * Request the original_carrier insight
     */
    originalCarrier?: Record<string, never>;

    /**
     * Request the current_carrier insight
     */
    currentCarrier?: Record<string, never>;

    /**
     * Request the sim_swap insight
     */
    simSwap?: {

      /**
       * Period in hours to be checked for SIM swap.
       */
      period: number;
    },

    /**
     * Request the subscriber_match insight
     */
    subscriberMatch?: MatchType;

  };
};
