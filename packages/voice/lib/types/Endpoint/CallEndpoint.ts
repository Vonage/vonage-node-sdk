import { PhoneEndpointObject } from "../../interfaces/Endpoint/PhoneEndpointObject";
import { SIPEndpointObject } from "../../interfaces/Endpoint/SIPEndpointObject";
import { VBCEndpointObject } from "../../interfaces/Endpoint/VBCEndpointObject";
import { WebsocketEndpointObject } from "../../interfaces/Endpoint/WebsocketEndpointObject";

export type CallEndpoint = PhoneEndpointObject | SIPEndpointObject | VBCEndpointObject | WebsocketEndpointObject