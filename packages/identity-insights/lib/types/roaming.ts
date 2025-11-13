import { StatusType } from './status.js';

/**
 * Represents the result of the roaming insights.
 */
export type Roaming = {
  /**
   * The status of the insight call.
   */
  status: StatusType;

  /**
   * Last time that the associated device roaming status was updated
   * Example: "2025-10-07T12:34:56Z"
   */
  latestStatusAt?: string;

  /**
   * true if roaming
   */
  isRoaming?: boolean;

  /**
   * List of countries representing where the phone_number is roaming
   */
  countryCodes?: Array<string>;
};
