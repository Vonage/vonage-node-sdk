import { MessageParams } from './MessageParams';

/**
 * Represents the parameters for a text message.
 */
export type MessageParamsText = {
  /**
   * The text content of the message.
   */
  text: string;
} & MessageParams;
