import { WhatsAppLanguageCode } from '../../../enums/index.js';

/**
 * Represents a WhatsApp policy type for deterministic messaging.
 *
 * @group WhatsApp
 */
export type WhatsAppPolicyType = {
  /**
   * The policy type, which is set to 'deterministic'.
   */
  policy: 'deterministic';

  /**
   * The locale for the WhatsApp message, following the WhatsApp language code.
   */
  locale: WhatsAppLanguageCode;
};
