import { PhoneNumberChannel } from './phoneNumberChannel.js';
import { SipChannel } from './sipChannel.js';
import { AppChannel } from './appChannel.js';
import { WebSocketChannel } from './websocketChannel.js';
import { VbcChannel } from './vbcChannel.js';

export type AnyChannel = PhoneNumberChannel
  | SipChannel
  | AppChannel
  | WebSocketChannel
  | VbcChannel;
