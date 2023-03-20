import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageAudioInterface } from '../MessageAudioInterface';

export interface MessengerAudioInterface
    extends MessengerChannelInterface,
        MessageAudioInterface {}
