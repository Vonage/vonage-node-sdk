import { EventMessageType } from '../enums/index.js';

export type MessageVideoBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.VIDEO;

  /**
   * Message video
   */
  video: {
    /**
     * Video URL
     */
    url: string;
  }
};
