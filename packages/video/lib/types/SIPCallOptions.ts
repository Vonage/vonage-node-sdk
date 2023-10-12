/**
 * Configuration options for a SIP call.
 */
export type SIPCallSIPConfig = {
  /**
   * The SIP URI to initiate the call.
   */
  uri: string;

  /**
   * The optional "from" field for the SIP call.
   */
  from?: string;

  /**
   * Custom headers to be included in the SIP call.
   */
  headers?: {
    [key: string]: string;
  };

  /**
   * Authentication credentials for the SIP call.
   */
  auth?: {
    /**
     * The username for SIP authentication.
     */
    username: string;

    /**
     * The password for SIP authentication.
     */
    password: string;
  };

  /**
   * Indicates whether the SIP call should be secure.
   */
  secure?: boolean;

  /**
   * Indicates whether video is enabled for the SIP call.
   */
  video?: boolean;

  /**
   * Indicates whether to observe and force mute for the SIP call.
   */
  observeForceMute?: boolean;
}

/**
 * Interface representing options for initiating a SIP call.
 */
export type SIPCallOptions = {
  /**
   * The authentication token for the SIP call.
   */
  token: string;

  /**
   * Configuration options for the SIP call.
   */
  sip: SIPCallSIPConfig;
}
