import { RCSReplySuggestionParams } from '../../../types/index.js';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion.js';
import { RCSSuggestionType } from '../../../enums/index.js';

export class RCSReplySuggestion
  extends RCSAbstractSuggestion
  implements RCSReplySuggestionParams {

  public type: RCSSuggestionType.REPLY = RCSSuggestionType.REPLY;

  constructor(params: Omit<RCSReplySuggestionParams, 'type'>) {
    super(params);
  }
}
