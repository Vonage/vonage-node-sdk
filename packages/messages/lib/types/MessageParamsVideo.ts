import { MessageParams } from './MessageParams';
import { MessageVideoType } from './MessageVideoType';

/**
 * Represents the parameters for a message containing a video.
 */
export type MessageParamsVideo = {
  /**
   * The video information to be included in the message.
   */
  video: MessageVideoType;
} & MessageParams;
