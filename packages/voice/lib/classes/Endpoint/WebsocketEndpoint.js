import debug from 'debug';

debug('@vonage/voice')(

  'This class is deprecated. Please update to use the WebsocketEndpointType type instead'
);

/**
 * Represents a WebSocket endpoint for making voice calls.
 *
 * @deprecated This class is deprecated. Please update to use the WebsocketEndpointType type instead.
 */
export class WebsocketEndpoint {
  /**
   * The type of the endpoint, which is always 'websocket'.
   */
  type;

  /**
   * The WebSocket URI associated with this endpoint.
   *
   * @param {string} uri - The WebSocket URI for the WebSocket endpoint.
   */
  uri;

  /**
   * The content type or bitrate for WebSocket streaming.
   *
   * @param {WebsocketBitrate} contentType - The content type or bitrate for WebSocket streaming.
   */
  contentType;

  /**
   * Optional custom headers to include in WebSocket requests.
   *
   * @param {Record<string, unknown>} headers - Optional custom headers as key-value pairs.
   */
  headers;

  /**
   * Create a new WebsocketEndpoint instance.
   *
   * @param {string} uri - The WebSocket URI for the WebSocket endpoint.
   * @param {WebsocketBitrate} contentType - The content type or bitrate for WebSocket streaming.
   * @param {Record<string, unknown>} headers - Optional custom headers as key-value pairs.
   */
  constructor(
  uri,
  contentType,
  headers)
  {
    this.type = 'websocket';
    this.uri = uri;
    this.contentType = contentType;

    if (headers) {
      this.headers = headers;
    }
  }
}
