import { ChannelType } from '../enums/index.js';

/**
 * Type representing a SIP channel.
 */
export type SipChannel = {
  /**
   * The type of channel (SIP).
   */
  type: ChannelType.SIP;

  /**
   * The SIP URI.
   */
  uri: string;

  /**
   * The SIP username.
   */
  username: string;

  /**
   * The SIP password.
   */
  password: string;
};
