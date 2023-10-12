/**
 * Represents the parameters for a message.
 */
export type MessageParams = {
  /**
   * The ID of the message recipient.
   */
  to: string;

  /**
   * The ID of the message sender.
   */
  from: string;

  /**
   * Client reference of up to 100 characters.
   * The reference will be present in every message status.
   */
  clientRef?: string;
};
