import { MessageParams } from '../../MessageParams';
import { WhatsAppTemplateType } from './WhatsAppTemplateType';
import { WhatsAppPolicyType } from './WhatsAppPolicyType';

/**
 * Represents WhatsApp template message parameters.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppTemplateParams = {
  /**
   * WhatsApp policy type for the template message.
   */
  whatsapp: WhatsAppPolicyType;

  /**
   * The WhatsApp template to be sent.
   */
  template: WhatsAppTemplateType;
} & MessageParams;
