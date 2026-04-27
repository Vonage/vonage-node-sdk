import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSReplySuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.REPLY;

  constructor(params) {
    super(params);
  }
}
