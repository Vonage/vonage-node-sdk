import { MessageParams } from './MessageParams';
import { MessageAudioType } from './MessageAudioType';

export type MessageParamsAudio = {
    audio: MessageAudioType
} & MessageParams
