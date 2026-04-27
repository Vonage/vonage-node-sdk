import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSOpenURLWebviewSuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.OPEN_URL_IN_WEBVIEW;

  /**
   * The URL to open when the suggestion is tapped.
   */
  url;

  /**
   * A short description of the URL for accessibility purposes.
   */
  description;

  /**
   * The mode for displaying the URL in the webview window
   */
  viewMode;

  constructor(params) {
    super(params);

    this.url = params.url;
    this.description = params.description;
    this.viewMode = params.viewMode;
  }
}
