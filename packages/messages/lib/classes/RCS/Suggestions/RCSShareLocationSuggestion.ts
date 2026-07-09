import { RCSShareLocationSuggestionParams } from '../../../types/index.js';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion.js';
import { RCSSuggestionType } from '../../../enums/index.js';

export class RCSShareLocationSuggestion
  extends RCSAbstractSuggestion
  implements RCSShareLocationSuggestionParams {

  public type: RCSSuggestionType.SHARE_LOCATION = RCSSuggestionType.SHARE_LOCATION;

  constructor(params: Omit<RCSShareLocationSuggestionParams, 'type'>) {
    super(params);
  }
}
