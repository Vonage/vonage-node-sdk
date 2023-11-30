/**
 * Represents a WebSocket endpoint, which can be used as a call destination.
 */
export type WebsocketEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'websocket' for WebSocket.
   */
  type: 'websocket';

  /**
   * The URI (Uniform Resource Identifier) of the WebSocket endpoint.
   */
  uri: string;

  /**
   * An optional content type to specify the format of the data sent to the WebSocket endpoint.
   */
  contentType?: string;

  /**
   * Optional headers to include when connecting to the WebSocket endpoint.
   */
  headers?: Record<string, unknown>;
};
