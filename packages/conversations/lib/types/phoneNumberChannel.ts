import { ChannelType } from '../enums';

/**
 * Type representing a phone number channel.
 */
export type PhoneNumberChannel = {
  /**
   * The type of channel (phone).
   */
  type: ChannelType.PHONE;

  /**
   * The phone number.
   */
  number: string;
};
