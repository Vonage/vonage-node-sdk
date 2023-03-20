import { MessageInterface } from './MessageInterface';
import { MessageAudioType } from '../types';

export interface MessageAudioInterface extends MessageInterface {
    messageType: 'audio'
    audio: MessageAudioType
}
