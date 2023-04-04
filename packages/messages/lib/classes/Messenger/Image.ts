import { MessengerCategory } from '../../enums';
import { ImageObject } from '../../interfaces/ImageObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessengerImage } from './MessengerImage';
import debug from 'debug';

const log = debug('vonage:messages:messenger');

/**
 * @deprecated please use MessengerImage instead
 */
export class Image extends MessengerImage {
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
        category: messenger.category as unknown as MessengerCategory,
        tag: messenger.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
