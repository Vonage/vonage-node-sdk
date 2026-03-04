import { NCCOActions } from '../../enums/';
import { WaitAction } from '../../types/';
import { Serializable } from '../../interfaces';

/**
 * Represents a Wait action in a Nexmo Call Control Object (NCCO).
 *
 * This action pauses execution of the running NCCO for a specified number of
 * seconds before continuing with the next action.
 */
export class Wait implements WaitAction, Serializable {
  /**
   * The action type for this NCCO action.
   */
  action: NCCOActions.WAIT = NCCOActions.WAIT;

  /**
   * The duration in seconds to pause execution (optional).
   */
  timeout?: number;

  /**
   * Creates a new Wait action.
   *
   * @param {number} [timeout] - The duration in seconds to pause execution.
   *   Valid values range from `0.1` to `7200`. Defaults to `10`.
   */
  constructor(timeout?: number) {
    if (timeout !== undefined) {
      this.timeout = timeout;
    }
  }

  /**
   * Serializes the Wait action to a Nexmo Call Control Object (NCCO).
   *
   * @return {WaitAction} - The serialized Wait action.
   */
  serializeToNCCO() {
    const data: WaitAction = {
      action: NCCOActions.WAIT,
    };

    if (this.timeout !== undefined) {
      data.timeout = this.timeout;
    }

    return data;
  }
}
