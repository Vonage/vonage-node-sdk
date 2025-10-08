import { RCSOpenURLSuggestionParams } from '../../../types';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSOpenURLSuggestion
  extends RCSAbstractSuggestion
  implements RCSOpenURLSuggestionParams {

  public type: RCSSuggestionType.OPEN_URL = RCSSuggestionType.OPEN_URL;

  /**
   * The URL to open when the suggestion is tapped.
   */
  public url: string;

  /**
   * A short description of the URL for accessibility purposes.
   */
  public description?: string;

  constructor(params: Omit<RCSOpenURLSuggestionParams, 'type'>) {
    super(params);
    this.url = params.url;
    this.description = params.description;
  }
}
