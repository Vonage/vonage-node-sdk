import { MessageParams } from '../../MessageParams';
import { WhatsAppCustomType } from './WhatsAppCustomType';

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
} & MessageParams;
