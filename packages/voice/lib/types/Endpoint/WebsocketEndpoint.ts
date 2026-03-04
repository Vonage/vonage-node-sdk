import { WebsocketAuthorization } from './WebsocketAuthorization.js';
import { WebsocketBitrate } from '../../enums/index.js';

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
   * An optional content type to specify the audio format sent to the WebSocket
   * endpoint.
   */
  contentType?: WebsocketBitrate | string;

  /**
   * Optional headers to include when connecting to the WebSocket endpoint.
   */
  headers?: Record<string, unknown>;

  /**
   * Optional configuration defining how the Authorization HTTP header is set
   * in the WebSocket opening handshake.
   */
  authorization?: WebsocketAuthorization;
};
