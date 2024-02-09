import { ChannelType } from '../enums';
import { AnyChannel } from './anyChannel';

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
