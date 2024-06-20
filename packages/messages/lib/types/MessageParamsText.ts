import { MessageParams } from './MessageParams';

/**
 * Represents the parameters for a text message.
 */
export type MessageParamsText = {
  /**
   * The text content of the message.
   */
  text: string;

  
  origin?: {
    /**
     * The network code of the message originator.
     */
    networkCode: string;
  };

} & MessageParams;
