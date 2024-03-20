import { WhatsAppCustomType } from './WhatsAppCustomType';
import { WhatsAppParams } from './WhatsAppParams';

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
