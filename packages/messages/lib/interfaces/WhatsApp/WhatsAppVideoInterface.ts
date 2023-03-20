import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { MessageVideoInterface } from '../MessageVideoInterface';

export interface WhatsAppVideoInterface
    extends WhatsAppChannelInterface,
        MessageVideoInterface {}
