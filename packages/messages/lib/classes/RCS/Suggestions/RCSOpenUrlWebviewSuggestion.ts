import { RCSOpenURLWebviewSuggestionParams } from '../../../types/index.js';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion.js';
import { RCSSuggestionType } from '../../../enums/index.js';

export class RCSOpenURLWebviewSuggestion
  extends RCSAbstractSuggestion
  implements RCSOpenURLWebviewSuggestionParams {

  public type: RCSSuggestionType.OPEN_URL_IN_WEBVIEW = RCSSuggestionType.OPEN_URL_IN_WEBVIEW;

  /**
   * The URL to open when the suggestion is tapped.
   */
  url: string;

  /**
   * A short description of the URL for accessibility purposes.
   */
  description?: string;

  /**
   * The mode for displaying the URL in the webview window
   */
  viewMode?: 'FULL' | 'TALL' | 'HALF';

  constructor(params: Omit<RCSOpenURLWebviewSuggestionParams, 'type'>) {
    super(params);

    this.url = params.url;
    this.description = params.description;
    this.viewMode = params.viewMode;
  }
}
