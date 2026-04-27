/**
 * A builder class for creating Nexmo Call Control Objects (NCCOs).
 */
export class NCCOBuilder {
  actions = [];

  /**
   * Add an action to the NCCO builder.
   *
   * @param {Action} action - The action to add to the NCCO.
   * @return {NCCOBuilder} - The NCCO builder instance (for method chaining).
   */
  addAction(action) {
    this.actions.push(
      'serializeToNCCO' in action ?
      action.serializeToNCCO() :
      action

    );
    return this;
  }

  /**
   * Build the NCCO by serializing the added actions.
   *
   * @return {Array<Action | Serializable>} - The built NCCO, which is an array of actions.
   */
  build() {
    return this.actions;
  }
}
