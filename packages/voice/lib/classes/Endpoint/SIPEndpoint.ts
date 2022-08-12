import { Headers } from '../../interfaces/Endpoint/Headers'
import { SIPEndpointObject } from '../../interfaces/Endpoint/SIPEndpointObject'

export class SIPEndpoint implements SIPEndpointObject {
    type: string = 'sip'
    uri: string
    headers?: Headers[]

    constructor(uri: string, headers?: Headers[]) {
        this.uri = uri

        if (headers) {
            this.headers = headers
        }
    }
}
