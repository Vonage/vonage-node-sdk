import { MessageAudioInterface } from '../MessageAudioInterface';
import { MMSChannelInterface } from './MMSChannelInterface';

export interface MMSAudioInterface
    extends MessageAudioInterface,
        MMSChannelInterface {}
