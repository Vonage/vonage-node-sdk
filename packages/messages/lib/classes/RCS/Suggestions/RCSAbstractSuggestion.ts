import { RCSSuggestionType } from '../../../enums';
import { RCSSuggestionParams } from '../../../types';

export abstract class RCSAbstractSuggestion implements RCSSuggestionParams {
  /**
   * The type for the suggestion object.
   */
  public abstract type: RCSSuggestionType;

  /**
   * The text shown on the suggestion chip and sent back if selected.
   */
  public text: string;

  /**
   * Developer-defined opaque metadata to return in the inbound webhook
   * when the user selects this suggestion.
   */
  public postbackData: string;

  constructor(params: Omit<RCSSuggestionParams, 'type'>) {
    this.text = params.text;
    this.postbackData = params.postbackData;
  }
}
