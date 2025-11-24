import { RCSSuggestionType } from '../../../../enums/';
import { RCSSuggestionParams } from './RCSSuggestionParams';

export type RCSCreateCalendarEventSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.CREATE_CALENDAR_EVENT;

  /**
   * The start time of the calendar event in ISO 8601 format.
   */
  startTime: string

  /**
   * The end time of the calendar event in ISO 8601 format.
   */
  endTime: string

  /**
   * The title of the calendar event
   */
  title: string

  /**
   * A description of the calendar event
   */
  description?: string

  /**
   * A URL to open if the device is unable to display create a calendar event
   */
  fallbackUrl?: string
}
