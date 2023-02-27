import { VerifyControlResponse } from './VerifyControlResponse';
import { Command } from '../../enums/index';

/**
 * @deprecated Please use VerifyControlResponse instead
 */
export interface VerifyCancelResponse extends VerifyControlResponse {
    command: Command.CANCEL
}
