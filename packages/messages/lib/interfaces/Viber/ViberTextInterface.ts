import { MessageTextInterface } from '../MessageTextInterface';
import { ViberChannelInterface } from './ViberChannelInterface';
import { ViberActionParams } from '../../types';

export interface ViberTextInterface
    extends MessageTextInterface,
        ViberChannelInterface {
    viberService: ViberActionParams
}
