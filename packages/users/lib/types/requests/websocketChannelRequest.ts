import { WebsocketChannel } from '../websocketChannel';

/**
 * Represents a request to create or update a WebSocket channel.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WebSocketChannelRequest = {
  /**
   * The content type associated with the WebSocket channel.
   */
  'content-type': string;
} & Omit<WebsocketChannel, 'contentType'>;
