import { Channels } from '../../../enums/Channels.js';

export type RCSParams = {
  channel: Channels.RCS | string;

  ttl?: number;
};
