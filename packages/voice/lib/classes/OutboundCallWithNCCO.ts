import { CallEndpoint, NCCOAction, PhoneEndpoint } from '../types/index.js';
import { OutboundCall } from './OutboundCall.js';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the CallWithNCCO type',
);

/* istanbul ignore next */
/**
 * Represents an outbound call with NCCO (Nexmo Call Control Object).
 *
 * @deprecated This class is deprecated. Please update to use the CallWithNCCO type
 */
export class OutboundCallWithNCCO
  extends OutboundCall {
  /**
   * The list of NCCO actions.
   */
  ncco: Array<NCCOAction>;

  /**
   * Creates a new outbound call with NCCO.
   *
   * @param {Array<NCCOAction>} ncco - The NCCO actions for the call.
   * @param {CallEndpoint} to - The call endpoint to which the outbound call will be made.
   * @param {PhoneEndpointObject} [from] - The phone endpoint object representing the caller's information.
   */
  constructor(
    ncco: Array<NCCOAction>,
    to: CallEndpoint,
    from?: PhoneEndpoint,
  ) {
    super(to, from);
    this.ncco = ncco;
  }
}
