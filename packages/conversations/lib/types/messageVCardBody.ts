import { EventMessageType } from '../enums/index.js';

export type MessageVCardBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.VCARD;

  /**
   * Message vcard
   */
  vcard: {
    /**
     * Vcard url
     */
    url: string;
  };

  image: {
    /**
     * Image URL
     */
    url: string;
  };
};
