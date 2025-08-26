import { APILinks } from '@vonage/server-client';
import { UserResponse } from './userResponse.js';

/**
 * Represents a page response containing a list of users.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type UserPageResponse = {
  /**
   * The number of records returned in this response.
   */
  page_size: number;

  /**
   * An object containing an array of user responses.
   */
  _embedded: {
    users: Array<UserResponse>;
  };
} & APILinks;
