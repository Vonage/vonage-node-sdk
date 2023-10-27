import { APILinks } from '@vonage/server-client';
import { MeetingRoomResponse } from './meetingRoomResponse';

/**
 * Represents the response for a page of meeting rooms.
 */
export type MeetingRoomPageResponse = {
  /**
   * The number of meeting rooms on the page.
   */
  page_size: number;

  /**
   * The total number of meeting rooms across all pages.
   */
  total_items: number;

  /**
   * An array of meeting room responses embedded within the page.
   */
  _embedded: Array<MeetingRoomResponse>;
} & APILinks;
