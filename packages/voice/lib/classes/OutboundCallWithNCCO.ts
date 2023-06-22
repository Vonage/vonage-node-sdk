import { PhoneEndpointObject } from '../interfaces/Endpoint/PhoneEndpointObject';
import { OutboundCallWithNCCO as IOutboundCallWithNCCO } from '../interfaces/OutboundCallWithNCCO';
import { Action } from '../ncco';
import { CallEndpoint } from '../types/Endpoint/CallEndpoint';
import { OutboundCall } from './OutboundCall';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class OutboundCallWithNCCO
  extends OutboundCall
  implements IOutboundCallWithNCCO
{
  public ncco: Action[];

  constructor(ncco: Action[], to: CallEndpoint, from?: PhoneEndpointObject) {
    super(to, from);
    this.ncco = ncco;
  }
}
