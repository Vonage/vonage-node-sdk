import { EventMessageType } from '../enums/index.js';

export type MessageStatusBody = {
  /**
   * The ID of the message.
   */
  originalEventId?: string;

  /**
   * Type of event
   */
  messageType?: EventMessageType;

  /**
   * Channel type
   */
  channelType?: 'sms' | 'mms' | 'whatsapp' | 'viber' | 'messenger';

  /**
   * Member ID of the sender.
   */
  from?: string;

  /**
   * Member ID of the recipient.
   */
  to?: string;

  /**
   * The ID of the message.
   */
  messageUUID?: string;

  /**
   * Message error
   */
  error?: Record<string, unknown>;

  /**
   * Message text
   */
  text?: string;

  image?: {
    /**
     * Image URL
     */
    url: string;
  };

  video?: {
    /**
     * Video URL
     */
    url: string;
  };

  audio?: {
    /**
     * Audio URL
     */
    url: string;
  };

  file?: {
    /**
     * File URL
     */
    url: string;
  };

  template?: {

    name: string;

    /**
     * Template variables
     */
    parameters: Array<string>;
  };

  whatsapp?: {
    /**
     * Whats App policy
     */
    policy: string;

    /**
     * Whats App locale
     */
    locale: string;
  };

  custom?: Record<string, unknown>;

  vcard?: {
    /**
     * VCard URL
     */
    url: string;
  };

  location?: {
    /**
     * Latitude
     */
    latitude: number;

    /**
     * Longitude
     */
    longitude: number;

    /**
     * Location name
     */
    name: string;

    /**
     * Location address
     */
    address: string;
  };

};
