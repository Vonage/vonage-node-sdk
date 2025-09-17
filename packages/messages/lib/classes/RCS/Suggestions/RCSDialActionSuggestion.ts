import { RCSDialActionSuggestionParams } from '../../../types';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSDialActionSuggestion
  extends RCSAbstractSuggestion
  implements RCSDialActionSuggestionParams {

  public type: RCSSuggestionType.DIAL = RCSSuggestionType.DIAL;

  /**
   * The phone number to dial in E.164 format.
   */
  public phoneNumber: string;

  /**
   * A URL to open if the device is unable to place a call.
   */
  public fallbackUrl?: string;

  constructor(params: Omit<RCSDialActionSuggestionParams, 'type'>) {
    super(params);

    this.phoneNumber = params.phoneNumber;
    this.fallbackUrl = params.fallbackUrl;
  }
}
