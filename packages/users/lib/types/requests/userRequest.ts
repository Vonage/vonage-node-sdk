import { UserType } from '../index.js';
import { WebSocketChannelRequest } from './websocketChannelRequest.js';

/**
 * Represents a request to create or update a user's properties.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type UserPropertiesRequest = {
  /**
   * Custom key-value pairs associated with the user.
   *
   * @remarks Data here will not have their properties transformed
   */
  custom_data: Record<string, string>;
};

/**
 * Represents a request to create or update a user's channels.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type UserChannelsRequest = {
  /**
   * An array of WebSocket channel requests.
   */
  websocket: Array<WebSocketChannelRequest>;
} & Omit<Pick<UserType, 'channels'>, 'websocket'>;

/**
 * Represents a request to create or update a user.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type UserRequest = {
  /**
   * The URL of the user's image.
   */
  image_url: string;

  /**
   * User properties including custom data.
   */
  properties: UserPropertiesRequest;

  /**
   * Channels for communication, specifically WebSocket channels.
   */
  channels: UserChannelsRequest
} & Omit<UserType, 'imageUrl' | 'properties'>;
