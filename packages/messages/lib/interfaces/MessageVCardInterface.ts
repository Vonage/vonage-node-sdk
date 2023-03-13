import { MessageInterface } from './MessageInterface';
import { MessageVcardType } from '../types';

export interface MessageVCardInterface extends MessageInterface {
    messageType: 'vcard'
    vcard: MessageVcardType
}
