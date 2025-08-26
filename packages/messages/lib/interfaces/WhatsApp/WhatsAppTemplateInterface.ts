import { WhatsAppChannelInterface } from './WhatsAppChannelInterface.js';
import { MessageInterface } from '../MessageInterface.js';
import { WhatsAppTemplateType, WhatsAppPolicyType } from '../../types/index.js';

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
