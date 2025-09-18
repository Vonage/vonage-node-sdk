import { RCSSuggestionType } from '../../../../enums/';
import { RCSSuggestionParams } from './RCSSuggestionParams';

export type RCSShareLocationSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.SHARE_LOCATION;
};
