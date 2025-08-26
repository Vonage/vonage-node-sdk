import { MessengerCategory } from '../../enums/index.js';
import { MessageType } from '../../interfaces/Messenger/MessageType.js';
import { VideoObject } from '../../interfaces/index.js';
import { MessengerType } from '../../types/index.js';
import { MessengerVideo } from './MessengerVideo.js';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * Represents a text message for the Messenger channel.
 *
 * @deprecated Please use the MessengerText class instead.
 *
 * @group Messenger
 */
export class Video extends MessengerVideo {
  /**
   * Constructs a new `Text` instance.
   *
   * @param {VideoObject} video - The text content of the message.
   * @param {string} to - The recipient of the message.
   * @param {string} from - The sender of the message.
   * @param {MessageType} messenger - The messenger information for the message.
   * @param {string} clientRef - The client reference for the message.
   */
  constructor(
    video: VideoObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    log('Please update to use the MessengerVideo class instead');
    super({
      video: video,
      to: to,
      from: from,
      messenger: {
        category: messenger?.category as unknown as MessengerCategory,
        tag: messenger?.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
