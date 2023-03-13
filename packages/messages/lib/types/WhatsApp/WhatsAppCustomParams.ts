import { MessageParamsFile } from '../MessageParamsFile';
import { WhatsAppCustomType } from './WhatsAppCustomType';

export type WhatsAppCustomParams = {
    custom: WhatsAppCustomType
} & MessageParamsFile
