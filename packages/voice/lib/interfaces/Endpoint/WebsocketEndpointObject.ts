import { WebsocketBitrate } from '../../enums/Endpoint/WebsocketBitrate';
import { CallEndpointObject } from './CallEndpointObject';
import { Headers } from './Headers';

export interface WebsocketEndpointObject extends CallEndpointObject {
    uri: string;
    contentType: WebsocketBitrate;
    headers?: Headers[];
}
