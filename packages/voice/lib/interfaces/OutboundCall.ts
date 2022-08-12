import { CallEndpoint } from '../types/Endpoint/CallEndpoint'
import { PhoneEndpointObject } from './Endpoint/PhoneEndpointObject'

export interface OutboundCall {
    to: CallEndpoint[]
    from?: PhoneEndpointObject
    randomFromNumber?: boolean
    eventUrl?: string[]
    eventMethod?: string
    machineDetection?: boolean
    lengthTimer?: number
    ringingTimer?: number
}
