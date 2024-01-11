import {
  WebsocketEndpoint,
  PhoneEndpoint,
  SIPEndpoint,
  VBCEndpoint,
} from '../Endpoint';

/**
 * Represents the response for a call endpoint, which can be one of the following:
 * - Phone endpoint
 * - Websocket endpoint
 * - SIP endpoint
 * - VBC (Vonage Business Cloud) endpoint
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CallEndpointResponse =
  | PhoneEndpoint
  | WebsocketEndpoint
  | SIPEndpoint
  | VBCEndpoint;
