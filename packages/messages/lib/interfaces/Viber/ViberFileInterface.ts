import { ViberChannelInterface } from './ViberChannelInterface';
import { MessageFileInterface } from '../MessageFileInterface';
import { ViberService } from '../../types';

export interface ViberFileInterface
    extends ViberChannelInterface,
        MessageFileInterface {
    viberService: ViberService
}
