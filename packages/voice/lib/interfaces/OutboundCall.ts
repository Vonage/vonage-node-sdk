import { Action } from "../ncco";
import { CallEndpoint } from "../types/Endpoint/CallEndpoint";
import { PhoneEndpointObject } from "./Endpoint/PhoneEndpointObject";

interface OutboundCall {
    to: CallEndpoint[]
    from?: PhoneEndpointObject
    randomFromNumber?: boolean
    eventUrl?: string[]
    eventMethod?: string
    machineDetection?: boolean
    lengthTimer?: number
    ringingTimer?: number
}

export interface OutboundCallWithNCCO extends OutboundCall {
    ncco: Action[]
}

export interface OutboundCallWithAnswerURL extends OutboundCall{
    answer_url: string[]
}