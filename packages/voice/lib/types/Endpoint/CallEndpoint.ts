import { PhoneEndpoint } from './PhoneEndpoint';
import { SIPEndpoint } from './SIPEndpoint';
import { VBCEndpoint } from './VBCEndpoint';
import { WebsocketEndpoint } from './WebsocketEndpoint';

export type CallEndpoint =
  | WebsocketEndpoint
  | PhoneEndpoint
  | SIPEndpoint
  | VBCEndpoint;
