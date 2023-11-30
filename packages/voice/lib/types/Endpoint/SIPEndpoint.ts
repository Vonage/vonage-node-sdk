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
  headers?: Array<Record<string, unknown>>;
};
