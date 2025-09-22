import { Action } from '../../types/NCCO/Action';

/**
 * Represents a Nexmo Call Control Object (NCCO) transfer action.
 */
export interface NCCOTransfer {
  /**
   * The action type, which is 'transfer'.
   */
  action: string;

  /**
   * The destination of the transfer, including the type and NCCO actions.
   */
  destination: {
    /**
     * The type of destination, which is 'ncco'.
     */
    type: string;

    /**
     * The NCCO actions to be executed at the destination.
     */
    ncco: Action[];
  };
}

/**
 * Represents a Nexmo Call Control Object (NCCO) URL transfer action.
 */
export interface URLTransfer {
  /**
   * The action type, which is 'transfer'.
   */
  action: string;

  /**
   * The destination of the transfer, including the type and URL.
   */
  destination: {
    /**
     * The type of destination, which is 'url'.
     */
    type: string;

    /**
     * The URL to which the call will be transferred.
     */
    url: string[];
  };
}
