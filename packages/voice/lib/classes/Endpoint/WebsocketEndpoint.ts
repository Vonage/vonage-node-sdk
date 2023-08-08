import { WebsocketBitrate } from '../../enums/Endpoint/WebsocketBitrate';
import { WebsocketEndpoint as WebsocketEndpointType } from '../../types/Endpoint/WebsocketEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class WebsocketEndpoint implements WebsocketEndpointType {
  type: 'websocket';
  uri: string;
  contentType: WebsocketBitrate;
  headers?: Record<string, unknown>;

  constructor(
    uri: string,
    contentType: WebsocketBitrate,
    headers?: Record<string, unknown>,
  ) {
    this.uri = uri;
    this.contentType = contentType;

    if (headers) {
      this.headers = headers;
    }
  }
  url: string;
}
