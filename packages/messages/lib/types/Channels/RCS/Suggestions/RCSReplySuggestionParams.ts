import { RCSSuggestionType } from '../../../../enums/index.js';
import { RCSSuggestionParams } from './RCSSuggestionParams.js';

export type RCSReplySuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.REPLY;
};
