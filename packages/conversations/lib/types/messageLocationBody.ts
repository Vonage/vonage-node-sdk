import { EventMessageType } from '../enums/index.js';

export type MessageLocationBody = {
  /**
   * Message Type
   */
  messageType: EventMessageType.LOCATION;

  location: {
    /**
     * Latitude
     */
    latitude: string;

    /**
     * Longitude
     */
    longitude: string;

    /**
     * Name
     */
    name: string;

    /**
     * Address
     */
    address: string;
  }
};
