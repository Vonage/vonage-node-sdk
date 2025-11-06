import { RCSShareLocationSuggestionParams } from '../../../types';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSShareLocationSuggestion
  extends RCSAbstractSuggestion
  implements RCSShareLocationSuggestionParams {

  public type: RCSSuggestionType.SHARE_LOCATION = RCSSuggestionType.SHARE_LOCATION;

  constructor(params: Omit<RCSShareLocationSuggestionParams, 'type'>) {
    super(params);
  }
}
