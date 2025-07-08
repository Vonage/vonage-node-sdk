import { MessageTypes } from '../enums/MessageTypes';
import { MessageParams } from './MessageParams';
import { MessageVcardParams } from './MessageVcardType';

/**
 * Represents the parameters for a message containing a vCard.
 */
export type MessageParamsVcard = {
  messageType: MessageTypes.VCARD;
} & MessageVcardParams & MessageParams;
