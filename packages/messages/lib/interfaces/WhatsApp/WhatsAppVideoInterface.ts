import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageVideoInterface } from '../MessageVideoInterface';

/**
 * Represents an interface for WhatsApp video messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppVideoInterface
  extends WhatsAppChannelInterface,
    MessageVideoInterface {}
