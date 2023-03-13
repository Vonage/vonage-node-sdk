import { MessageParamsVideo } from '../MessageParamsVideo';
import { ViberVideoInterface } from '../../interfaces';
import { ViberActionParams } from './ViberActionParams';

export type ViberVideoParams = {
    viberService: Pick<ViberVideoInterface, 'viberService'> & ViberActionParams
} & MessageParamsVideo
