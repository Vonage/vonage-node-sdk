import { MessageInterface } from './MessageInterface';
import { MessageImageType } from '../types';

/**
 * Represents a message interface for image attachments.
 *
 * This interface is used for defining messages with image attachments and
 * includes the message type 'image' and the image content.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageImageInterface extends MessageInterface {
  /**
   * Specifies the message type as 'image'.
   */
  messageType: 'image';

  /**
   * The image content of the message, including the URL to the image.
   */
  image: MessageImageType;
}
