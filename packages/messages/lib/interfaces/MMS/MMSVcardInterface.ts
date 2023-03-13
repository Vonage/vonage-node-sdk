import { MMSChannelInterface } from './MMSChannelInterface';
import { MessageVCardInterface } from '../MessageVCardInterface';

export interface MMSVcardInterface
    extends MessageVCardInterface,
        MMSChannelInterface {}
