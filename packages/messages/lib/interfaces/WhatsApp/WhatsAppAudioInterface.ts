import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageAudioInterface } from '../MessageAudioInterface';

export interface WhatsAppAudioInterface
    extends WhatsAppChannelInterface,
        MessageAudioInterface {}
