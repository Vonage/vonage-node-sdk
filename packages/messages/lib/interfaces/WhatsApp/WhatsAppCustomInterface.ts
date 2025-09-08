import { MessageInterface } from '../MessageInterface.js';
import { WhatsAppChannelInterface } from './WhatsAppChannelInterface.js';
import { WhatsAppCustomType } from '../../types/index.js';

/**
 * Represents a WhatsApp custom message interface.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppCustomInterface
  extends MessageInterface,
  WhatsAppChannelInterface {
  /**
   * Custom data for the WhatsApp message.
   */
  custom: WhatsAppCustomType;
}
