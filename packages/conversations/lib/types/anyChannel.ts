import { PhoneNumberChannel } from './phoneNumberChannel';
import { SipChannel } from './sipChannel';
import { AppChannel } from './appChannel';
import { WebSocketChannel } from './websocketChannel';
import { VbcChannel } from './vbcChannel';

export type AnyChannel = PhoneNumberChannel
  | SipChannel
  | AppChannel
  | WebSocketChannel
  | VbcChannel;
