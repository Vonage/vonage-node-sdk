import {
  isNCCOSerializable,
  Serializable,
} from '../../interfaces/NCCO/Serializable';
import { Action } from '../../ncco';

/**
 * A builder class for creating Nexmo Call Control Objects (NCCOs).
 */
export class NCCOBuilder {
  protected actions = [];

  /**
   * Add an action to the NCCO builder.
   *
   * @param {Action} action - The action to add to the NCCO.
   * @return {NCCOBuilder} - The NCCO builder instance (for method chaining).
   */
  public addAction(action: Action): NCCOBuilder {
    this.actions.push(action);
    return this;
  }

  /**
   * Build the NCCO by serializing the added actions.
   *
   * @return {Array<Action | Serializable>} - The built NCCO, which is an array of actions.
   */
  public build(): Array<Action | Serializable> {
    return this.actions.map((action) =>
      isNCCOSerializable(action) ? action.serializeToNCCO() : action,
    );
  }
}
