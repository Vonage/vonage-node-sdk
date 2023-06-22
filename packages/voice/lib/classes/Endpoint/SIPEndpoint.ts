import { SIPEndpoint as SIPEndpointType } from '../../types/Endpoint/SIPEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class SIPEndpoint implements SIPEndpointType {
  type: 'sip';
  uri: string;
  headers?: Array<Record<string, unknown>>;

  constructor(uri: string, headers?: Array<Record<string, unknown>>) {
    this.uri = uri;

    if (headers) {
      this.headers = headers;
    }
  }
}
