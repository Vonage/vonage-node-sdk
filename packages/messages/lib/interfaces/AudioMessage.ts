import { AudioObject } from './AudioObject';
import { MessageObject } from './MessageObject';

export interface AudioMessage extends MessageObject {
    audio: AudioObject;
}
