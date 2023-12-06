/**
 * Represents a SIP (Session Initiation Protocol) channel with the URI, username, and password.
 */
export type SipChannel = {
  /**
   * The SIP URI associated with the channel.
   */
  uri: string;

  /**
   * The username for authentication with the SIP channel.
   */
  username: string;

  /**
   * The password for authentication with the SIP channel.
   */
  password: string;
};
