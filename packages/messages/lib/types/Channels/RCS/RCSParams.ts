import { Channels, RCSCategory } from '../../../enums/';

export type RCSSettings = {
  /**
   * A categery describing the type of content contained in the RCS message.
   * This is required when sending RCS messages in certain countries in
   * order to comply with regional regulations and contractual agreements.
   * If you are unsure about the restrictions and required categories for
   * the country you are senidng to, please contact your Vonage Account
   * Manager.
   */
  category: RCSCategory;
}

export type RCSParams = {
  channel: Channels.RCS | string;

  ttl?: number;

  /**
   * An object of optional settings for the RCS message.
   */
  rcs?: RCSSettings;
};
