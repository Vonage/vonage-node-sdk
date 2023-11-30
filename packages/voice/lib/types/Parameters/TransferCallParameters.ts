import { XOR } from 'ts-xor';
import { NCCOAction } from '../NCCO';

/**
 * Destination using URL.
 */
type TransferWithURL = {
  ncco: Array<NCCOAction>;
};

/**
 * Destination using NCCO.
 */
type TransferWithNCCO = {
  url: Array<string>;
};

/**
 * Represents parameters for transferring a call to another destination.
 */
export type TransferCallParameters = {
  /**
   * The action type indicating a call transfer.
   */
  action: 'transfer';

  /**
   * The destination of the transfer, which can be specified using NCCO or a URL.
   */
  destination: {
    /**
     * The type of destination, either 'ncco' for NCCO-based transfer or 'url' for URL-based transfer.
     */
    type: 'ncco';
  } & XOR<TransferWithURL, TransferWithNCCO>;
};
