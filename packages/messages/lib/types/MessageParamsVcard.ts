import { MessageParams } from './MessageParams';
import { MessageVcardType } from './MessageVcardType';

/**
 * Represents the parameters for a message containing a vCard.
 */
export type MessageParamsVcard = {
  /**
   * The vCard information to be included in the message.
   */
  vcard: MessageVcardType;
} & MessageParams;
