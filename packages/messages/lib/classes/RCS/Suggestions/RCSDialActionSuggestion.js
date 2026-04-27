import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSDialActionSuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.DIAL;

  /**
   * The phone number to dial in E.164 format.
   */
  phoneNumber;

  /**
   * A URL to open if the device is unable to place a call.
   */
  fallbackUrl;

  constructor(params) {
    super(params);

    this.phoneNumber = params.phoneNumber;
    this.fallbackUrl = params.fallbackUrl;
  }
}
