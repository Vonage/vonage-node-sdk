import { EventMessageType } from '../enums/index.js';

export type MessageImageBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.IMAGE;

  /**
   * Message image
   */
  image: {
    /**
     * Image URL
     */
    url: string;
  }
};
