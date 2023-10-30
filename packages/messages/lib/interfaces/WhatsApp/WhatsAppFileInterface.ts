import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageFileInterface } from '../MessageFileInterface';

/**
 * Represents an interface for WhatsApp file messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppFileInterface
  extends WhatsAppChannelInterface,
    MessageFileInterface {}
