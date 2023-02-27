import { VerifyWorkflows, VerifyLanguages } from '../enums/index';

export interface VerificationParameters {
    number: string
    brand: string
    country?: string
    senderId?: string
    codeLength?: number
    lg?: VerifyLanguages
    pinExpiry?: number
    nextEventWait?: number
    workflowId?: VerifyWorkflows
    pinCode?: string
}
