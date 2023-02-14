import { CheckStatus } from '../../lib/enums/index';

export type VerifyControlError = {
    status: CheckStatus
    errorText: string
}
