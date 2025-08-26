import { MessengerType } from '../../types/index.js';

/**
 * Represents an interface for defining the Messenger channel and MessengerType.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerChannelInterface {
  /**
   * The channel type, which should be 'messenger'.
   */
  channel: 'messenger';

  /**
   * Details about the Messenger type.
   */
  messenger: MessengerType;
}
