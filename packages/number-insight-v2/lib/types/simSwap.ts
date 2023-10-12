import { Status } from '../enums/';

/**
 * Represents the result of the sim_swap insight operation.
 */
export type SimSwap = {
  /**
   * The status of the sim_swap call. Must be one of the values from the 'Status' enum.
   */
  status: Status;

  /**
   * true if the sim was swapped in the last 7 days, false otherwise.
   * Returned only if the sim swap check succeeds.
   */
  swapped?: boolean;

  /**
   * The reason for a sim swap error response. Returned only if the sim swap check fails.
   */
  reason?: string;
};
