import { VerifyLocale } from '../enums';
import { EmailWorkflow } from './emailWorkflow';
import { SMSWorkflow } from './sMSWorkflow';
import { SilentAuthWorkflow } from './silentAuthWorkflow';
import { VoiceWorkflow } from './voiceWorkflow';
import { WhatsAppInteractiveWorkflow } from './whatsAppInteractiveWorkflow';
import { WhatsAppWorkflow } from './whatsAppWorkflow';

export type VerificationRequestParams = {
    brand: string
    workflow: Array<
        | EmailWorkflow
        | SMSWorkflow
        | SilentAuthWorkflow
        | VoiceWorkflow
        | WhatsAppInteractiveWorkflow
        | WhatsAppWorkflow
    >
    locale?: VerifyLocale
    channelTimeout?: number
    clientRef?: string
    codeLength?: 4 | 5 | 6 | 7 | 8 | 9 | 10
}
