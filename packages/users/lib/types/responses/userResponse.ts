import { APILinks } from '@vonage/server-client';
import { UserRequest } from '../requests/index.js';

/**
 * Represents a response containing user information.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type UserResponse = UserRequest & APILinks;
