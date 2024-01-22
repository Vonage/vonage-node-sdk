import { APILinks } from '@vonage/server-client';

/**
 * The user as its returned from the API
 */
export type MemberUserResponse = {
  /**
   * The user's id
   */
  id: string

  /**
   * The Unique name for the user
   */
  name: string

  /**
   * A string to be displayed for the user. This does not have to be unique.
   */
  display_name: string
} & APILinks;
