import { EventMessageType } from '../enums/index.js';

export type MessageTextBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.TEXT;

  /**
   * Message text
   */
  text: string;
};
