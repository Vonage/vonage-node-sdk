import { WebsocketBitrate } from "../../enums/Endpoint/WebsocketBitrate"
import { Headers } from "../../interfaces/Endpoint/Headers"
import { WebsocketEndpointObject } from "../../interfaces/Endpoint/WebsocketEndpointObject"

export class WebsocketEndpoint implements WebsocketEndpointObject {
    type: string = 'websocket'
    uri: string
    contentType: WebsocketBitrate
    headers?: Headers[]

    constructor(uri: string, contentType: WebsocketBitrate, headers?: Headers[]) {
        this.uri = uri
        this.contentType = contentType
        
        if (headers) { this.headers = headers }
    }
}