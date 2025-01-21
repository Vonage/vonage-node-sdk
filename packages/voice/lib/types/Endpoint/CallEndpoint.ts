import { PhoneEndpoint } from './PhoneEndpoint';
import { SIPEndpoint } from './SIPEndpoint';
import { VBCEndpoint } from './VBCEndpoint';
import { WebsocketEndpoint } from './WebsocketEndpoint';
import { AppEndpoint } from './AppEndpoint';

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
