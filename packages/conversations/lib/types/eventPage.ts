import { APILink } from '@vonage/server-client';
import { Event } from './event.js';

export type EventPage = {
  /**
   * The number of items returned on this page.
   */
  pageSize: number;

  /**
   * Embedded events.
   */
  events: Array<Event>;

  /**
   * Links to other resources.
   */
  links?: Record<string, APILink>;
}
