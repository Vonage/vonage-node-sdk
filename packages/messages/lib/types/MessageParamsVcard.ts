import { MessageParams } from './MessageParams';
import { MessageVcardParams } from './MessageVcardType';

/**
 * Represents the parameters for a message containing a vCard.
 */
export type MessageParamsVcard = MessageVcardParams & MessageParams;
