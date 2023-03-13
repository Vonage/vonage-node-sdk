import { MessageInterface } from './MessageInterface';
import { MessageFileType } from '../types';

export interface MessageFileInterface extends MessageInterface {
    messageType: 'file'
    file: MessageFileType
}
