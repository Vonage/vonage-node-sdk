import { WebsocketChannel } from '../websocketChannel.js';

/**
 * Represents a response containing WebSocket channel information.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WebSocketChannelResponse = {
  /**
   * The content type associated with the WebSocket channel.
   */
  'content-type': string;
} & Omit<WebsocketChannel, 'contentType'>;
