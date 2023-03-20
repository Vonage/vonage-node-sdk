import { ViberChannelInterface } from './ViberChannelInterface';
import { MessageVideoInterface } from '../MessageVideoInterface';
import { ViberService } from '../../types';

export interface ViberVideoInterface
    extends ViberChannelInterface,
        MessageVideoInterface {
    viberService: {
        duration: string
        fileSize: string
    } & ViberService
}
