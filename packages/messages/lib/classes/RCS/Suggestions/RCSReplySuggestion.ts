import { RCSReplySuggestionParams } from '../../../types';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSReplySuggestion
  extends RCSAbstractSuggestion
  implements RCSReplySuggestionParams {

  public type: RCSSuggestionType.REPLY = RCSSuggestionType.REPLY;

  constructor(params: Omit<RCSReplySuggestionParams, 'type'>) {
    super(params);
  }
}
