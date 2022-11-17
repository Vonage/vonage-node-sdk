import {
    PhoneEndpointObject,
} from '../interfaces/Endpoint/PhoneEndpointObject';
import {
    OutboundCallWithNCCO as IOutboundCallWithNCCO,
} from '../interfaces/OutboundCallWithNCCO';
import { Action } from '../ncco';
import { CallEndpoint } from '../types/Endpoint/CallEndpoint';
import { OutboundCall } from './OutboundCall';

export class OutboundCallWithNCCO
    extends OutboundCall
    implements IOutboundCallWithNCCO {
    public ncco: Action[];

    constructor(ncco: Action[], to: CallEndpoint, from?: PhoneEndpointObject) {
        super(to, from);
        this.ncco = ncco;
    }
}
