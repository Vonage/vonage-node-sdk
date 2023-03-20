import { MessageParams } from './MessageParams';
import { MessageFileType } from './MessageFileType';

export type MessageParamsFile = {
    file: MessageFileType
} & MessageParams
