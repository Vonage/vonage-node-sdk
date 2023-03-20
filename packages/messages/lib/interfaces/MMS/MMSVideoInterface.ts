import { MessageVideoInterface } from '../MessageVideoInterface';
import { MMSChannelInterface } from './MMSChannelInterface';

export interface MMSVideoInterface
    extends MessageVideoInterface,
        MMSChannelInterface {}
