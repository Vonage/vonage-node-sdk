import { MatchType } from './match.js';
import { SimSwapType } from './simSwap.js';
import { locationVerificationType } from './locationVerification.js';

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
  purpose: 'FraudPreventionAndDetection';

  /**
   * The insight(s) you need. At least one insight must be requested.
   */
  insights?: {
    /**
     * Verify whether the phone number is correctly structured
     */
    format?: Record<string, never>;

    /**
     * Provide information about the carrier and network type originally associated with the phone number
     */
    originalCarrier?: Record<string, never>;

    /**
     * Identify the mobile network operator that is currently assigned for the given phone number
     */
    currentCarrier?: Record<string, never>;

    /**
     * Determine if the SIM card linked to the given phone number has recently changed
     */
    simSwap?: SimSwapType;

    /**
     * Verify the location of an end-user device within a specified area
     */
    locationVerification?: locationVerificationType;

    /**
     * Compare user data against the mobile network operator’s records.
     */
    subscriberMatch?: MatchType;

    /**
     * Check the roaming status and country on a mobile network
     */
    roaming?: Record<string, never>;

    /**
     * Check connectivity status
     */
    reachability?: Record<string, never>;
  };
};
