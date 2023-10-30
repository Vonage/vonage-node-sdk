import { MessageInterface } from './MessageInterface';
import { MessageVideoType } from '../types';

/**
 * Represents a video message type.
 *
 * This interface extends the base `MessageInterface` and includes a `video` property
 * for the video message content and a `messageType` property indicating it as a video message.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageVideoInterface extends MessageInterface {
  /**
   * The video content of the message.
   */
  video: MessageVideoType;

  /**
   * The message type, which is set to 'video' for video messages.
   */
  messageType: 'video';
}
