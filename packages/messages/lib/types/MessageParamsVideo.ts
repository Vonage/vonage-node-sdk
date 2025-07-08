import { MessageTypes } from '../enums/MessageTypes';
import { MessageParams } from './MessageParams';
import { MessageVideoType } from './MessageVideoType';

/**
 * Represents the parameters for a message containing a video.
 */
export type MessageParamsVideo = {
  messageType: MessageTypes.VIDEO;
  /**
   * The video information to be included in the message.
   */
  video: MessageVideoType;
} & MessageParams;
