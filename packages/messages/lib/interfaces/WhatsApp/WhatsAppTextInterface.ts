import { MessageTextInterface } from '../MessageTextInterface';
import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';

export interface WhatsAppTextInterface
    extends MessageTextInterface,
        WhatsAppChannelInterface {}
