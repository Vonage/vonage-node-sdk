import { VerifyLocale } from '../enums';
import { EmailWorkflow } from './emailWorkflow';
import { SMSWorkflow } from './smsWorkflow';
import { SilentAuthWorkflow } from './silentAuthWorkflow';
import { VoiceWorkflow } from './voiceWorkflow';
import { WhatsAppInteractiveWorkflow } from './whatsAppInteractiveWorkflow';
import { WhatsAppWorkflow } from './whatsAppWorkflow';

type SMSWorkFlowRequest = {
    app_has: string
} & Omit<SMSWorkflow, 'appHash'>

export type VerificationRequest = {
    brand: string
    workflow: Array<
        | EmailWorkflow
        | SMSWorkFlowRequest
        | SilentAuthWorkflow
        | VoiceWorkflow
        | WhatsAppInteractiveWorkflow
        | WhatsAppWorkflow
    >
    locale?: VerifyLocale
    channel_timeout?: number
    client_ref?: string
    code_length?: 4 | 5 | 6 | 7 | 8 | 9 | 10
}
