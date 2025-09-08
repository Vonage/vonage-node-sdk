import { PhoneEndpoint } from './PhoneEndpoint.js';
import { SIPEndpoint } from './SIPEndpoint.js';
import { VBCEndpoint } from './VBCEndpoint.js';
import { WebsocketEndpoint } from './WebsocketEndpoint.js';
import { AppEndpoint } from './AppEndpoint.js';

/**
 * Represents a call endpoint, which can be of different types such as Phone, SIP, VBC, or Websocket.
 * This type can be used to specify the destination for an outbound call.
 */
export type CallEndpoint =
  | WebsocketEndpoint
  | PhoneEndpoint
  | SIPEndpoint
  | AppEndpoint
  | VBCEndpoint;
