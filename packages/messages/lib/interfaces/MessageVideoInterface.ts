import { MessageInterface } from './MessageInterface';
import { MessageVideoType } from '../types';

export interface MessageVideoInterface extends MessageInterface {
    messageType: 'video'
    video: MessageVideoType
}
