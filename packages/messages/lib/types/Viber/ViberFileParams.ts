import { MessageParamsFile } from '../MessageParamsFile';
import { ViberService } from './ViberService';

export type ViberFileParams = {
    viberService: ViberService
} & MessageParamsFile
