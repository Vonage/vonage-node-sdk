import { UserType } from '../index';
import { WebSocketChannelRequest } from './websocketChannelRequest';

export type UserRequest = {
  image_url: string;
  properties: {
    custom_data: Record<string, string>;
  };
  channels: {
    websocket: Array<WebSocketChannelRequest>;
  } & Omit<Pick<UserType, 'channels'>, 'websocket'>;
} & Omit<UserType, 'imageUrl' | 'properties'>;
