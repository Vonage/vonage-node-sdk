import { ChannelType } from '../enums';

/**
 * Type representing a WebSocket channel.
 */
export type WebSocketChannel = {
  /**
   * The type of channel (WebSocket).
   */
  type: ChannelType;

  /**
   * The WebSocket URI.
   */
  uri: string;

  /**
   * The content type for WebSocket.
   */
  contentType: string;
};
