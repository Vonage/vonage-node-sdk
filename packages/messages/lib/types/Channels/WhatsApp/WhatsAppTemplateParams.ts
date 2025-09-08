import { WhatsAppTemplateType } from './WhatsAppTemplateType.js';
import { WhatsAppPolicyType } from './WhatsAppPolicyType.js';
import { WhatsAppParams } from './WhatsAppParams.js';

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
