import { MessageTypes } from '../enums/MessageTypes.js';
import { MessageParams } from './MessageParams.js';

/**
 * Represents the parameters for a text message.
 */
export type MessageParamsText = {
  messageType: MessageTypes.TEXT | string;

  /**
   * The text content of the message.
   */
  text: string;
} & MessageParams;
