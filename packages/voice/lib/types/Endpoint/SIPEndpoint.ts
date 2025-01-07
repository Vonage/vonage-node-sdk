/**
 * Represents a SIP (Session Initiation Protocol) endpoint, which can be used as a call destination.
 */
export type SIPEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'sip' for SIP URIs.
   */
  type: 'sip';

  /**
   * The SIP URI associated with the endpoint.
   */
  uri: string;

  /**
   * An optional array of headers as key-value pairs. These headers can be included in the SIP request.
   */
  headers?: Record<string, unknown>;

  /**
   * Standard SIP INVITE headers. Unlike the headers property, these are not
   * prepended with X-.
   */
  standardHeaders?: {
    /**
     * Transmit user-to-user information if supported by the CC / PBX vendor,
     * as per RFC 7433.
     *
     * @link https://tools.ietf.org/html/rfc7433
     */
    userToUser?: string;

    /**
     * Allows using the pure header that is expected in the API call.
     */
    'User-to-User'?: string;
  }
};

