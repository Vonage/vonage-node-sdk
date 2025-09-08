import { ImageObject } from '../../interfaces/index.js';
import { MessageType } from '../../interfaces/Messenger/MessageType.js';
import { MessengerType } from '../../types/index.js';
import { MessengerImage } from './MessengerImage.js';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * @deprecated please use MessengerImage class instead
 *
 * @group Messenger
 */
export class Image extends MessengerImage {
  /**
   * Constructs a new `Image` instance.
   *
   * @param {ImageObject} image - The image object containing the URL and optional caption.
   * @param {string} to - The recipient's ID.
   * @param {string} from - The sender's ID.
   * @param {MessageType} messenger - The messenger object specifying the message category and tag.
   * @param {string} clientRef - The client reference.
   */
  constructor(
    image: ImageObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    log('Please update to use the MessengerImage class instead');
    super({
      image: image,
      to: to,
      from: from,
      messenger: {
        category: messenger?.category,
        tag: messenger?.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
