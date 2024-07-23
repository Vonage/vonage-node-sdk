import { WebsocketBitrate } from '../../enums';
import { WebsocketEndpoint as WebsocketEndpointType } from '../../types/Endpoint/WebsocketEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
   
  'This class is deprecated. Please update to use the WebsocketEndpointType type instead',
);

/**
 * Represents a WebSocket endpoint for making voice calls.
 *
 * @deprecated This class is deprecated. Please update to use the WebsocketEndpointType type instead.
 */
export class WebsocketEndpoint implements WebsocketEndpointType {
  /**
   * The type of the endpoint, which is always 'websocket'.
   */
  type: 'websocket';

  /**
   * The WebSocket URI associated with this endpoint.
   *
   * @param {string} uri - The WebSocket URI for the WebSocket endpoint.
   */
  uri: string;

  /**
   * The content type or bitrate for WebSocket streaming.
   *
   * @param {WebsocketBitrate} contentType - The content type or bitrate for WebSocket streaming.
   */
  contentType: WebsocketBitrate;

  /**
   * Optional custom headers to include in WebSocket requests.
   *
   * @param {Record<string, unknown>} headers - Optional custom headers as key-value pairs.
   */
  headers?: Record<string, unknown>;

  /**
   * Create a new WebsocketEndpoint instance.
   *
   * @param {string} uri - The WebSocket URI for the WebSocket endpoint.
   * @param {WebsocketBitrate} contentType - The content type or bitrate for WebSocket streaming.
   * @param {Record<string, unknown>} headers - Optional custom headers as key-value pairs.
   */
  constructor(
    uri: string,
    contentType: WebsocketBitrate,
    headers?: Record<string, unknown>,
  ) {
    this.type = 'websocket';
    this.uri = uri;
    this.contentType = contentType;

    if (headers) {
      this.headers = headers;
    }
  }
}
