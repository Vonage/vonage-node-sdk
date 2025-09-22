import { Serializable } from '../../interfaces';
import { NCCOAction } from '../../types/';

/**
 * A builder class for creating Nexmo Call Control Objects (NCCOs).
 */
export class NCCOBuilder {
  protected actions: Array<NCCOAction> = [];

  /**
   * Add an action to the NCCO builder.
   *
   * @param {Action} action - The action to add to the NCCO.
   * @return {NCCOBuilder} - The NCCO builder instance (for method chaining).
   */
  public addAction(action: NCCOAction): NCCOBuilder {
    this.actions.push(
      ('serializeToNCCO' in action
        ? (action as unknown as Serializable).serializeToNCCO()
        : action
      ) as NCCOAction,
    );
    return this;
  }

  /**
   * Build the NCCO by serializing the added actions.
   *
   * @return {Array<Action | Serializable>} - The built NCCO, which is an array of actions.
   */
  public build(): Array<NCCOAction> {
    return this.actions;
  }
}
