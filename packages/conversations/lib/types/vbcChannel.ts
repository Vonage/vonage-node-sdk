import { ChannelType } from '../enums';

/**
 * Type representing a VBC (Voice Business Cloud) channel.
 */
export type VbcChannel = {
  /**
   * The type of channel (VBC).
   */
  type: ChannelType.VBC;

  /**
   * The VBC extension.
   */
  extension: string;
};
