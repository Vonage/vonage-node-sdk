import {
  WebsocketEndpoint,
  PhoneEndpoint,
  SIPEndpoint,
  VBCEndpoint,
} from '../Endpoint';

export type CallEndpointResponse =
  | PhoneEndpoint
  | WebsocketEndpoint
  | SIPEndpoint
  | VBCEndpoint;
