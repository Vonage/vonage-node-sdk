import { WhatsAppChannelInterface } from './WhatsAppChannelInterface.js';
import { MessageAudioInterface } from '../MessageAudioInterface.js';

/**
 * Represents an audio message type for WhatsApp.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppAudioInterface
  extends WhatsAppChannelInterface,
  MessageAudioInterface { }
