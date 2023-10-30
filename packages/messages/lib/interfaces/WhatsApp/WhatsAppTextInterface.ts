import { MessageTextInterface } from '../MessageTextInterface';
import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';

/**
 * Represents an interface for WhatsApp text messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppTextInterface
  extends MessageTextInterface,
    WhatsAppChannelInterface {}
