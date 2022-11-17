import { Action } from '../ncco';
import { OutboundCall } from './OutboundCall';

export interface OutboundCallWithNCCO extends OutboundCall {
    ncco: Action[];
}
