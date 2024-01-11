import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageAudioInterface } from '../MessageAudioInterface';

/**
 * Represents an interface for sending audio messages via Messenger.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerAudioInterface
    extends MessengerChannelInterface,
        MessageAudioInterface {}
