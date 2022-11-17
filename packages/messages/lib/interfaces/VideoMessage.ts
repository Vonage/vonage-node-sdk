import { MessageObject } from './MessageObject';
import { VideoObject } from './VideoObject';

export interface VideoMessage extends MessageObject {
    video: VideoObject;
}
