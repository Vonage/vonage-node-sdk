import { StatusType } from './status.js';
import { LocationVerified } from '../enums/locationVerified.js';

/**
 * Represents the result of the location verification insights.
 */
export type LocationVerification = {
  /**
   * The status of the insight call.
   */
  status: StatusType;

  /**
   * Result of the verification request
   */
  isVerified?: LocationVerified;

  /**
   * Date and time of the last location
   * Example: "2025-10-07T12:34:56Z"
   */
  latestLocationAt?: string;

  /**
   * Estimation of the match rate between the area in the request, and
   * area where the network locates the device
   */
  matchRate?: number;
};
