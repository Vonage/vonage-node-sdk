import { MessageParamsImage } from '../MessageParamsImage';
import { ViberActionParams } from './ViberActionParams';

export type ViberImageParams = {
    viberService: ViberActionParams
} & MessageParamsImage
