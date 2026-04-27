import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSOpenURLSuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.OPEN_URL;

  /**
   * The URL to open when the suggestion is tapped.
   */
  url;

  /**
   * A short description of the URL for accessibility purposes.
   */
  description;

  constructor(params) {
    super(params);
    this.url = params.url;
    this.description = params.description;
  }
}
