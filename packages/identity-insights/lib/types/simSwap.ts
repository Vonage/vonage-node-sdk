import { StatusType } from './status.js';

/**
 * Represents the result of the sim_swap insight operation.
 */
export type SimSwap = {
  /**
   * The status of the insight call.
   */
  status: StatusType;

  /**
   * true if the sim was swapped in the given period of time, false otherwise.
   * Returned only if the sim swap check succeeds.
   */
  isSwapped?: boolean;

  /**
   * Date and time in UTC ISO 8601 of latest SIM swap performed.
   * Example: "2025-10-07T12:34:56Z"
   */
  latestSimSwapAt?: string;
};
