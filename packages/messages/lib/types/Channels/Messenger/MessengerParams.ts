import { Channels } from '../../../enums/index.js';
import { MessengerType } from './MessengerType.js';

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
