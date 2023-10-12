import { MessageInterface } from '../MessageInterface';
import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { WhatsAppCustomType } from '../../types';

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
