import { RCSSuggestionType } from '../../../../enums/';
import { RCSSuggestionParams } from './RCSSuggestionParams';

export type RCSDialActionSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.DIAL;

  /**
   * The phone number to dial in E.164 format.
   */
  phoneNumber: string;

  /**
   * A URL to open if the device is unable to place a call.
   */
  fallbackUrl?: string;
}
