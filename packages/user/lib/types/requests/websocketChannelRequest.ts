import { WebsocketChannel } from '../websocketChannel';

export type WebSocketChannelRequest = {
  'content-type': string;
} & Omit<WebsocketChannel, 'contentType'>;
