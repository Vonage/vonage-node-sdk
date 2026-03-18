import { NCCOActions } from '../../enums/index.js';

/**
 * Represents a Wait action within a Nexmo Call Control Object (NCCO). This
 * action pauses execution of the running NCCO for a specified number of
 * seconds before continuing with the next action.
 */
export type WaitAction = {
  /**
   * The action type, which is always set to 'wait'.
   */
  action: NCCOActions.WAIT;

  /**
   * (Optional) The duration in seconds to pause execution. Valid values range
   * from `0.1` to `7200` seconds. Values below `0.1` default to `0.1` and
   * values above `7200` default to `7200`. Defaults to `10` if not specified.
   */
  timeout?: number;
};
