import { SIPEndpoint as SIPEndpointType } from '../../types/Endpoint/SIPEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This class is deprecated. Please update to use the SIPEndpointType type instead',
);

/**
 * Represents a SIP (Session Initiation Protocol) endpoint for making voice calls.
 * @deprecated This class is deprecated. Please update to use the SIPEndpointType type instead.
 */
export class SIPEndpoint implements SIPEndpointType {
  /**
   * The type of the endpoint, which is always 'sip'.
   */
  type: 'sip';

  /**
   * The SIP URI associated with this endpoint.
   *
   * @param {string} uri - The SIP URI for the SIP endpoint.
   */
  uri: string;

  /**
   * Optional custom headers to include in SIP requests.
   *
   * @param {Array<Record<string, unknown>>} headers - Optional custom headers as an array of key-value pairs.
   */
  headers?: Array<Record<string, unknown>>;

  /**
   * Create a new SIPEndpoint instance.
   *
   * @param {string} uri - The SIP URI for the SIP endpoint.
   * @param {Array<Record<string, unknown>>} headers - Optional custom headers as an array of key-value pairs.
   */
  constructor(uri: string, headers?: Array<Record<string, unknown>>) {
    this.type = 'sip';
    this.uri = uri;

    if (headers) {
      this.headers = headers;
    }
  }
}
