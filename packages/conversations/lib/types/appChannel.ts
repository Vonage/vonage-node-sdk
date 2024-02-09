import { ChannelType } from '../enums';

/**
 * Type representing an app channel.
 */
export type AppChannel = {
  /**
   * The type of channel (app).
   */
  type: ChannelType.APP;

  /**
   * The app user.
   */
  user: string;
};
