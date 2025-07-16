import { Channels } from '../../../enums/Channels';

export type RCSParams = {
  channel: Channels.RCS | string;

  ttl?: number;
};
