import { WebsocketChannel } from '../websocketChannel';

export type WebSocketChannelResponse = {
  'content-type': string;
} & Omit<WebsocketChannel, 'contentType'>;
