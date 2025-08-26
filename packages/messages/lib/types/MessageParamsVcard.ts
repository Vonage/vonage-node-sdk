import { MessageTypes } from '../enums/MessageTypes.js';
import { MessageParams } from './MessageParams.js';
import { MessageVcardParams } from './MessageVcardType.js';

/**
 * Represents the parameters for a message containing a vCard.
 */
export type MessageParamsVcard = {
  messageType: MessageTypes.VCARD | string;
} & MessageVcardParams & MessageParams;
