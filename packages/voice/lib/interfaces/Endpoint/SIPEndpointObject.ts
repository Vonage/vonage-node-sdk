import { CallEndpointObject } from './CallEndpointObject'
import { Headers } from './Headers'

export interface SIPEndpointObject extends CallEndpointObject {
    uri: string
    headers?: Headers[]
}
