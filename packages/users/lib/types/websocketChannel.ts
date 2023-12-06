/**
 * Represents a WebSocket channel configuration.
 */
export type WebsocketChannel = {
  /**
   * The WebSocket URI for the channel.
   */
  uri: string;

  /**
   * Optional content type for WebSocket channel data.
   */
  contentType?: string;

  /**
   * Optional headers for WebSocket channel configuration.
   */
  headers?: Record<string, string>;
};
