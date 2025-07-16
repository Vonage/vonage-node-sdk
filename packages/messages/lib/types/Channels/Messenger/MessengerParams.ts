import { Channels } from '../../../enums';
import { MessengerType } from './MessengerType';

/**
 * Represents parameters specific to the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerParams = {
  channel: Channels.MESSENGER | string;

  messenger: MessengerType;
};
