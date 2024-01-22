import { EventMessageType } from '../enums';

export type MessageTemplateBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.TEMPLATE;

  /**
   * Message template
   */
  template: {
    /**
     * Template name
     */
    name: string;

    /**
     * Template parameters
     */
    parameters: Array<unknown>

    /**
     * Whatsapp settings
     */
    whatsapp: {
    /**
     * Template policy
     */
     policy: string;

     /**
      * Template locale
      */
     locale: string;
    }
  }
};
