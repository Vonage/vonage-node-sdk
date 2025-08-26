import { APILinks } from '@vonage/server-client';
import { EventResponse } from './eventResponse.js';

export type EventPageResponse = {
  /**
   * The number of items returned on this page.
   */
  page_size: number;

  /**
   * Embedded events.
   */
  _embedded: Array<EventResponse>;

} & APILinks;

