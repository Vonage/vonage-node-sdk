import { CheckStatus } from '../enums/index';

export type VerifyControlError = {
    status: CheckStatus
    errorText: string
}
