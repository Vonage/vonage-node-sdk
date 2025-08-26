import { EventMessageType } from '../enums/index.js';

export type MessageFileBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.FILE;

  file: {
    /**
     * File URL
     */
    url: string;
  }
};
