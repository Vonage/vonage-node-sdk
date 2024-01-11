import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageInterface } from '../MessageInterface';
import { WhatsAppPolicyType } from '../../types';
import { WhatsAppTemplateType } from '../../types';

/**
 * Represents an interface for WhatsApp template messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppTemplateInterface
  extends WhatsAppChannelInterface,
    MessageInterface {
  /**
   * Specifies the type of message, which is "template" for template messages.
   */
  messageType: 'template';

  /**
   * Defines the WhatsApp policy type for the template message.
   */
  whatsapp: WhatsAppPolicyType;

  /**
   * Specifies the details of the template to be sent, including its name and parameters.
   */
  template: WhatsAppTemplateType;
}
