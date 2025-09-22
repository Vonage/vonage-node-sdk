import { RCSCreateCalendarEventSuggestionParams } from '../../../types';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSCreateCalendarEventSuggestion
  extends RCSAbstractSuggestion
  implements RCSCreateCalendarEventSuggestionParams {

  public type: RCSSuggestionType.CREATE_CALENDAR_EVENT = RCSSuggestionType.CREATE_CALENDAR_EVENT;

  /**
   * The start time of the calendar event in ISO 8601 format.
   */
  public startDate: string;

  /**
   * The end time of the calendar event in ISO 8601 format.
   */
  public endDate: string;

  /**
   * The title of the calendar event
   */
  public title: string;

  /**
   * A description of the calendar event
   */
  public description?: string;

  /**
   * A URL to open if the device is unable to display create a calendar event
   */
  public fallbackUrl?: string;

  constructor(params: Omit<RCSCreateCalendarEventSuggestionParams, 'type'>) {
    super(params);

    this.title = params.title;
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.description = params.description;
    this.fallbackUrl = params.fallbackUrl;
  }
}
