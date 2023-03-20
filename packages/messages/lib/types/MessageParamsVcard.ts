import { MessageParams } from './MessageParams';
import { MessageVcardType } from './MessageVcardType';

export type MessageParamsVcard = {
    vcard: MessageVcardType
} & MessageParams
