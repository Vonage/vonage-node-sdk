import { APILink } from '@vonage/server-client';
import { Session } from './session.js';

export type SessionPage = {
  /**
   * The number of items in the page.
   */
  pageSize: number;

  /**
   * Sessions in the page.
   */
  sessions: Array<Session>;

  /**
   * HAL links for the page.
   */
  links?: Record<string, APILink>;
}
