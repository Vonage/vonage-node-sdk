import { RCSSuggestionType } from '../../../../enums/index.js';
import { RCSSuggestionParams } from './RCSSuggestionParams.js';

export type RCSOpenURLSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.OPEN_URL;

  /**
   * The URL to open when the suggestion is tapped.
   */
  url: string;

  /**
   * A short description of the URL for accessibility purposes.
   */
  description?: string
};
