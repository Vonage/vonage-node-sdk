import { MessengerCategory } from '../../enums';
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
 * @deprecated please use MessengerAudio instead
 */
export class Audio extends MessengerAudio {
  constructor(
    audio: AudioObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    log('Please update to use the MessengerVideo class instead');
    super({
      audio: audio as MessageAudioType,
      to: to,
      from: from,
      messenger: {
        category: messenger.category as unknown as MessengerCategory,
        tag: messenger.tag,
      } as MessengerType,
      clientRef: clientRef,
    } as MessengerAudioParams);
  }
}
