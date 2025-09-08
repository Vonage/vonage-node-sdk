import { MessageTypes } from '../enums/MessageTypes.js';
import { MessageParams } from './MessageParams.js';
import { MessageVideoType } from './MessageVideoType.js';

/**
 * Represents the parameters for a message containing a video.
 */
export type MessageParamsVideo = {
  messageType: MessageTypes.VIDEO | string;
  /**
   * The video information to be included in the message.
   */
  video: MessageVideoType;
} & MessageParams;
