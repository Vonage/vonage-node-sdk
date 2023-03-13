import { MessageInterface } from '../MessageInterface';
import { WhatsAppChannelInterface } from './WhatsAppChannelInterface';
import { WhatsAppCustomType } from '../../types';

export interface WhatsAppCustomInterface
    extends MessageInterface,
        WhatsAppChannelInterface {
    custom: WhatsAppCustomType
}
