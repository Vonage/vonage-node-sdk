import { MessageInterface } from './MessageInterface';
import { MessageFileType } from '../types';
/**
 * Represents a message interface for file attachments.
 *
 * This interface is used for defining messages with file attachments and
 * includes the message type 'file' and the file content.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageFileInterface extends MessageInterface {
  /**
   * Specifies the message type as 'file'.
   */
  messageType: 'file';

  /**
   * The file content of the message, including the URL to the file and an
   * optional caption.
   */
  file: MessageFileType;
}
