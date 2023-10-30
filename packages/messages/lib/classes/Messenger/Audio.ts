import { AudioObject } from '../../interfaces/AudioObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import {
  MessageAudioType,
  MessengerAudioParams,
  MessengerType,
} from '../../types';
import { MessengerAudio } from './MessengerAudio';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * @deprecated please use the MessengerAudio class instead
 *
 * @group Messenger
 */
export class Audio extends MessengerAudio {
  /**
   * @deprecated Please use MessengerAudio instead.
   * Represents an audio message for the Messenger platform.
   *
   * @param {AudioObject} audio - The audio object containing the audio URL and an optional caption.
   * @param {string} to - The recipient's ID.
   * @param {string} from - The sender's ID.
   * @param {MessageType} messenger - The Messenger message type and category.
   * @param {string} clientRef - An optional client reference.
   */
  constructor(
    audio: AudioObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    log('Please update to use the MessengerAudio class instead');
    super({
      audio: audio as MessageAudioType,
      to: to,
      from: from,
      messenger: {
        category: messenger?.category,
        tag: messenger?.tag,
      } as MessengerType,
      clientRef: clientRef,
    } as MessengerAudioParams);
  }
}
