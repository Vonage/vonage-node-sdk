import { APILinks } from '@vonage/server-client';
import { SessionResponse } from './sessionResponse.js';

export type SessionPageResponse = {
  /**
   * Number of members in the page.
   */
  page_size: number;

  /**
   * HAL Page response
   */
  _embedded: {
    /**
     * The sessions in the page.
     */
    sessions: Array<SessionResponse>;
  }
} & APILinks;
