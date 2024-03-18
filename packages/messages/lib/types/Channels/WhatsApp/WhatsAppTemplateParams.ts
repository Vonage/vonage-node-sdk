import { WhatsAppTemplateType } from './WhatsAppTemplateType';
import { WhatsAppPolicyType } from './WhatsAppPolicyType';
import { WhatsAppParams } from './WhatsAppParams';

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
} & WhatsAppParams;
