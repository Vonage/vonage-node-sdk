import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageImageInterface } from '../MessageImageInterface';

export interface WhatsAppImageInterface
    extends WhatsAppChannelInterface,
        MessageImageInterface {}
