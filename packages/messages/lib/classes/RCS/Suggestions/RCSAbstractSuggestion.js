export class RCSAbstractSuggestion {
  /**
   * The type for the suggestion object.
   */

  /**
   * The text shown on the suggestion chip and sent back if selected.
   */
  text;

  /**
   * Developer-defined opaque metadata to return in the inbound webhook
   * when the user selects this suggestion.
   */
  postbackData;

  constructor(params) {
    this.text = params.text;
    this.postbackData = params.postbackData;
  }
}
