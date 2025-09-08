import { Command } from '../../enums/index.js';

/**
 * Represents the response for a Verify control operation.
 */
export type VerifyControlResponse = {
  /**
   * The status code indicating the outcome of the operation.
   */
  status: string;

  /**
   * The command associated with the Verify control operation.
   */
  command: Command;
}
