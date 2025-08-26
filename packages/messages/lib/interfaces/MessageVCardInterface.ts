import { MessageInterface } from './MessageInterface.js';
import { MessageVcardType } from '../types/index.js';
/**
 * Represents a VCard message type.
 *
 * This interface extends the base `MessageInterface` and includes a `vcard` property
 * for the VCard message content and a `messageType` property indicating it as a VCard message.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageVCardInterface extends MessageInterface {
  /**
   * The VCard content of the message.
   */
  vcard: MessageVcardType;

  /**
   * The message type, which is set to 'vcard' for VCard messages.
   */
  messageType: 'vcard';
}
