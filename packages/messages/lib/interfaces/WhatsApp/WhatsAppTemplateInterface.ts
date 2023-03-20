import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageInterface } from '../MessageInterface';
import { WhatsAppPolicyType } from '../../types';
import { WhatsAppTemplateType } from '../../types';

export interface WhatsAppTemplateInterface
    extends WhatsAppChannelInterface,
        MessageInterface {
    messageType: 'template'
    whatsapp: WhatsAppPolicyType
    template: WhatsAppTemplateType
}
