import { MessageObject } from './MessageObject';

export interface TextMessage extends MessageObject {
    message_type: string;
    text: string;
}
