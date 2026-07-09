import { RCSSuggestionType } from '../../../../enums/index.js';
import { RCSSuggestionParams } from './RCSSuggestionParams.js';

export type RCSShareLocationSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.SHARE_LOCATION;
};
