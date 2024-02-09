import { EventMessageType } from '../enums';


export type MessageCustomBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.CUSTOM;

  /**
   * Custom data for message
   */
  custom: Record<string, number | string | boolean>;
};
