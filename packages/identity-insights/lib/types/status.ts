import { Status } from '../enums/index.js';

/**
 * Represents the result of the insight operation.
 */
export type StatusType = {
  /**
   * The status of the insight. Must be one of the values from the 'CodeStatus' enum.
   */
  status: Status;

  /**
   * More detailed status description.
   */
  message: string;
};
