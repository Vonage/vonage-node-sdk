import { MessageInterface } from './MessageInterface';
import { MessageAudioType } from '../types';

/**
 * Represents a message interface for audio messages.
 *
 * This interface is used for defining audio messages and includes the message type 'audio' and the audio content.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageAudioInterface extends MessageInterface {
  /**
   * Specifies the message type as 'audio'.
   */
  messageType: 'audio';

  /**
   * The audio content of the message, including the URL to the audio file.
   */
  audio: MessageAudioType;
}
