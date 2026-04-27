import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSShareLocationSuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.SHARE_LOCATION;

  constructor(params) {
    super(params);
  }
}
