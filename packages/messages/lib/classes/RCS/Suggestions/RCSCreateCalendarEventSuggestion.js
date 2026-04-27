import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSCreateCalendarEventSuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.CREATE_CALENDAR_EVENT;

  /**
   * The start time of the calendar event in ISO 8601 format.
   */
  startTime;

  /**
   * The end time of the calendar event in ISO 8601 format.
   */
  endTime;

  /**
   * The title of the calendar event
   */
  title;

  /**
   * A description of the calendar event
   */
  description;

  /**
   * A URL to open if the device is unable to display create a calendar event
   */
  fallbackUrl;

  constructor(params) {
    super(params);

    this.title = params.title;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.description = params.description;
    this.fallbackUrl = params.fallbackUrl;
  }
}
