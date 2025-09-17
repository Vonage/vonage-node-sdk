import { RCSSuggestionType } from '../../../../enums/';
import { RCSSuggestionParams } from './RCSSuggestionParams';

export type RCSReplySuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.REPLY;
};
