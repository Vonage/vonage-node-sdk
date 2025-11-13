import { StatusType } from './status.js';
import { Connectivity } from '../enums/connectivity.js';

/**
 * Represents the result of the reachability insights.
 */
export type Reachability = {
  /**
   * The status of the insight call.
   */
  status: StatusType;

  /**
   * Last time that the associated device connectivity status was updated
   * Example: "2025-10-07T12:34:56Z"
   */
  latestStatusAt?: string;

  /**
   * Indicate whether the device is connected to the network
   */
  isReachable?: boolean;

  /**
   * Indicates if the device is connected to the network for DATA or SMS.
   * Only prresent if isReachable = True
   */
  connectivity?: Array<Connectivity>;
};
