import { RCSSuggestionType } from '../../../../enums/';
import { RCSSuggestionParams } from './RCSSuggestionParams';

export type RCSOpenURLWebviewSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.OPEN_URL_IN_WEBVIEW;

  /**
   * The URL to open when the suggestion is tapped.
   */
  url: string;

  /**
   * A short description of the URL for accessibility purposes.
   */
  description?: string

  /**
   * The mode for displaying the URL in the webview window
   */
  viewMode?: 'FULL' | 'TALL' | 'HALF';
};
