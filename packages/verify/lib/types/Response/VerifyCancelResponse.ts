import { VerifyControlResponse } from './VerifyControlResponse.js';
import { Command } from '../../enums/index.js';

/**
 * Represents the response for cancelling a verification request.
 *
 * @deprecated Please use VerifyControlResponse instead
 */
export type VerifyCancelResponse = VerifyControlResponse & {
  /**
   * The command type for the response, which is "CANCEL".
   */
  command: Command.CANCEL;
}
