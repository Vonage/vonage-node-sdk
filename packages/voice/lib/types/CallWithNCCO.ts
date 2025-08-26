import { NCCOAction } from './NCCO/index.js';
import { CommonOutboundCall } from './CommonOutboundCall.js';

/**
 * Represents an outbound call with associated Nexmo Call Control Objects (NCCO) actions.
 */
export type CallWithNCCO = CommonOutboundCall & {
  /**
   * An array of NCCO actions to be executed during the call.
   */
  ncco: Array<NCCOAction>;
};
