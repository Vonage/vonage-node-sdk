import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageAudioInterface } from '../MessageAudioInterface';

/**
 * Represents an audio message type for WhatsApp.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface WhatsAppAudioInterface
  extends WhatsAppChannelInterface,
    MessageAudioInterface {}
