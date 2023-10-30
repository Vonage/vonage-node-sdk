import { MessengerAudioParams } from './MessengerAudioParams';
import { MessengerFileParams } from './MessengerFileParams';
import { MessengerImageParams } from './MessengerImageParams';
import { MessengerParams } from './MessengerParams';
import { MessengerTextParams } from './MessengerTextParams';
import { MessengerType } from './MessengerType';
import { MessengerVideoParams } from './MessengerVideoParams';
import { Channels } from "../../../enums";

export * from './MessengerAudioParams';
export * from './MessengerFileParams';
export * from './MessengerImageParams';
export * from './MessengerParams';
export * from './MessengerTextParams';
export * from './MessengerType';
export * from './MessengerVideoParams';

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
  channel: Channels.MESSENGER
} & AnyMessengerParams
