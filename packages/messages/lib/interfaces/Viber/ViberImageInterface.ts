import { ViberChannelInterface } from './ViberChannelInterface';
import { MessageImageInterface } from '../MessageImageInterface';
import { ViberActionParams } from '../../types';

export interface ViberImageInterface
    extends ViberChannelInterface,
        MessageImageInterface {
    viberService: ViberActionParams
}
