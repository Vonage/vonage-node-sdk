import { MessageTypes } from '../enums/MessageTypes';
import { MessageParams } from './MessageParams';

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
