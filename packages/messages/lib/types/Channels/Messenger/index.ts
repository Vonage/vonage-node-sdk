import { MessengerAudioParams } from './MessengerAudioParams.js';
import { MessengerFileParams } from './MessengerFileParams.js';
import { MessengerImageParams } from './MessengerImageParams.js';
import { MessengerParams } from './MessengerParams.js';
import { MessengerTextParams } from './MessengerTextParams.js';
import { MessengerType } from './MessengerType.js';
import { MessengerVideoParams } from './MessengerVideoParams.js';
import { Channels } from '../../../enums/index.js';

export * from './MessengerAudioParams.js';
export * from './MessengerFileParams.js';
export * from './MessengerImageParams.js';
export * from './MessengerParams.js';
export * from './MessengerTextParams.js';
export * from './MessengerType.js';
export * from './MessengerVideoParams.js';

/**
 * Represents a union type that can be any of the Messenger-specific message
 * parameters or MessengerType.
 *
 * @group Messenger
 * @category Parameters
 */
export type AnyMessengerParams =
  MessengerAudioParams |
  MessengerFileParams |
  MessengerImageParams |
  MessengerParams |
  MessengerTextParams |
  MessengerType |
  MessengerVideoParams;

/**
 * Represents a union type that includes the 'channel' property set to 'messenger'
 * along with any of the Messenger-specific message parameters or MessengerType.
 */
export type AnyMessengerChannel = {
  /**
   * The channel through which the message will be sent, which is 'messenger' for Messenger.
   */
  channel: Channels.MESSENGER | string;
} & AnyMessengerParams
