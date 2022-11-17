import {
    PhoneEndpointObject,
} from '../interfaces/Endpoint/PhoneEndpointObject';
import { CallEndpoint } from '../types/Endpoint/CallEndpoint';

export abstract class OutboundCall {
    public to: CallEndpoint[];
    public from?: PhoneEndpointObject;
    public randomFromNumber?: boolean;
    public eventUrl?: string[];
    public eventMethod?: string;
    public machineDetection?: boolean;
    public lengthTimer?: number;
    public ringingTimer?: number;

    constructor(to: CallEndpoint, from?: PhoneEndpointObject) {
        this.to = [to];

        if (from) {
            this.from = from;
        } else {
            this.randomFromNumber = true;
        }
    }
}
