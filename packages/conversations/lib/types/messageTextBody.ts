import { EventMessageType } from '../enums';

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
