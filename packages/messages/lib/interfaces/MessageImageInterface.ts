import { MessageInterface } from './MessageInterface';
import { MessageImageType } from '../types';

export interface MessageImageInterface extends MessageInterface {
    messageType: 'image'
    image: MessageImageType
}
