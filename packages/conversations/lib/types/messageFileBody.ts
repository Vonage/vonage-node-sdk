import { EventMessageType } from '../enums';

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
