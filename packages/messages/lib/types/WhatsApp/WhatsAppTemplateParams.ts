import { MessageParams } from '../MessageParams';
import { WhatsAppTemplateType } from './WhatsAppTemplateType';
import { WhatsAppPolicyType } from './WhatsAppPolicyType';

export type WhatsAppTemplateParams = {
    whatsapp: WhatsAppPolicyType
    template: WhatsAppTemplateType
} & MessageParams
