import { MessageImageInterface } from '../MessageImageInterface';
import { MMSChannelInterface } from './MMSChannelInterface';

export interface MMSImageInterface
    extends MessageImageInterface,
        MMSChannelInterface {}
