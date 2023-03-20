import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageFileInterface } from '../MessageFileInterface';

export interface WhatsAppFileInterface
    extends WhatsAppChannelInterface,
        MessageFileInterface {}
