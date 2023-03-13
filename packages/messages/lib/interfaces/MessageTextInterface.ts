import { MessageInterface } from './MessageInterface';

export interface MessageTextInterface extends MessageInterface {
    text: string
    messageType: 'text'
}
