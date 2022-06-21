import { PhoneEndpointObject } from "../interfaces/Endpoint/PhoneEndpointObject"
import { OutboundCallWithNCCO as IOutboundCallWithNCCO } from "../interfaces/OutboundCall"
import { OutboundCallWithAnswerURL as IOutboundCallWithAnswerURL } from "../interfaces/OutboundCall"
import { Action } from "../ncco"
import { CallEndpoint } from "../types/Endpoint/CallEndpoint"

abstract class OutboundCall {
    public to: CallEndpoint[]
    public from?: PhoneEndpointObject
    public randomFromNumber?: boolean
    public eventUrl?: string[]
    public eventMethod?: string
    public machineDetection?: boolean
    public lengthTimer?: number
    public ringingTimer?: number

    constructor(to: CallEndpoint, from?: PhoneEndpointObject) {
        this.to = [to];

        if (from) {
            this.from = from;
        } else {
            this.randomFromNumber = true;
        }
        
    }
}

export class OutboundCallWithNCCO extends OutboundCall implements IOutboundCallWithNCCO {
    public ncco: Action[]

    constructor(ncco: Action[], to: CallEndpoint, from?: PhoneEndpointObject) {
        super(to, from);
        this.ncco = ncco;
    }
}

export class OutboundCallWithAnswerURL extends OutboundCall implements IOutboundCallWithAnswerURL {
    public answer_url: string[]

    constructor(answerUrl: string, to: CallEndpoint, from?: PhoneEndpointObject) {
        super(to, from);
        this.answer_url = [answerUrl];
    }
}