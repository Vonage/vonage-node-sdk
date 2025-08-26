import { MessengerChannelInterface } from './MessengerChannelInterface.js';
import { MessageAudioInterface } from '../MessageAudioInterface.js';

/**
 * Represents an interface for sending audio messages via Messenger.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerAudioInterface
  extends MessengerChannelInterface,
  MessageAudioInterface { }
