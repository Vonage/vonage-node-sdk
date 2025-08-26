import { ChannelType } from '../enums/index.js';
import { AnyChannel } from './anyChannel.js';

export type MessageChannelBody = {
  /**
   * Channel Details
   */
  channel: {
    /**
     * Channel is going to user/type
     */
    to: AnyChannel;

    /**
     * Channel is coming from user/type
     */
    from: AnyChannel;
  }

  /**
   * Message ID
   */
  id: string;

  /**
   * Message Type
   */
  type: ChannelType;

  /**
   * Message headers
   */
  headers: Record<string, string>;
}
