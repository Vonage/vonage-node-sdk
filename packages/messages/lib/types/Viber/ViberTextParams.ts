import { ViberActionParams } from './ViberActionParams';
import { MessageParamsText } from '../MessageParamsText';

export type ViberTextParams = {
    viberService: ViberActionParams
} & MessageParamsText
