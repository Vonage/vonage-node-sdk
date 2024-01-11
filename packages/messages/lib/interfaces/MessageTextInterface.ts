import { MessageInterface } from './MessageInterface';

/**
 * Represents a text message type.
 *
 * This interface extends the base `MessageInterface` and includes a `text` property
 * for the text message content and a `messageType` property indicating it as a text message.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageTextInterface extends MessageInterface {
  /**
   * The text content of the message.
   */
  text: string;

  /**
   * The message type, which is set to 'text' for text messages.
   */
  messageType: 'text';
}
