import { AudioRate } from '../enums/index.js';

/**
 * Configuration options for establishing a WebSocket connection.
 */
export type WebSocketConfig = {
  /**
   * The URI to connect to the WebSocket server.
   */
  uri: string;

  /**
   * An array of stream IDs to associate with the WebSocket connection.
   */
  streams?: string[];

  /**
   * Optional headers to include in the WebSocket request.
   */
  headers?: {
    [key: string]: string;
  };

  /**
   * The audio rate to be used for the WebSocket connection.
   */
  audioRate?: AudioRate;

  /**
   * Whether the WebSocket connection should be bidirectional. By default, this is false.
   */
  bidirectional?: boolean;
}
