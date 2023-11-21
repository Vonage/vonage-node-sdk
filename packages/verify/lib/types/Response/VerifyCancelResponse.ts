import { VerifyControlResponse } from './VerifyControlResponse';
import { Command } from '../../enums';

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
