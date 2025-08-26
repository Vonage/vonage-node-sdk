import { MessageTextInterface } from '../MessageTextInterface.js';
import { WhatsAppChannelInterface } from './WhatsAppChannelInterface.js';

/**
 * Represents an interface for WhatsApp text messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppTextInterface
  extends MessageTextInterface,
  WhatsAppChannelInterface { }
