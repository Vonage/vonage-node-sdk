import { WhatsAppPolicyType, WhatsAppTemplateType } from '../WhatsApp/index';

export type WhatsAppTemplateRequest = {
    client_ref: string
    message_type: 'template'
    template: WhatsAppTemplateType
    to: string
    from: string
    channel: 'whatsapp'
    whatsapp: WhatsAppPolicyType
}
