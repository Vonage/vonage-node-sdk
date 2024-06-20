import { MessageParams } from './MessageParams';
import { MessageVcardParams } from './MessageVcardType';

/**
 * Represents the parameters for a message containing a vCard.
 */
export type MessageParamsVcard = {
  /**
   * The amount of time in seconds the message will live for
   */
  ttl?: number;
} &  MessageVcardParams & MessageParams;
