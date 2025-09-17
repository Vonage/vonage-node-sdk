import { RCSSuggestionType } from '../../../../enums/';

export type RCSSuggestionParams = {
  /**
   * The type for the suggestion object.
   */
  type: RCSSuggestionType

  /**
   * The text shown on the suggestion chip and sent back if selected.
   */
  text: string;

  /**
   * Developer-defined opaque metadata to return in the inbound webhook
   * when the user selects this suggestion.
   */
  postbackData: string;
}
