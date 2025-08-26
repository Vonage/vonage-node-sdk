import { WhatsAppCustomType } from './WhatsAppCustomType.js';
import { WhatsAppParams } from './WhatsAppParams.js';

/**
 * Represents parameters for sending a custom WhatsApp message with a file attachment.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppCustomParams = {
  /**
   * The custom WhatsApp message type.
   */
  custom: WhatsAppCustomType;
} & WhatsAppParams;
