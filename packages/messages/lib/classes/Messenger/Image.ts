import { MessengerCategory } from '../../enums';
import { ImageObject } from '../../interfaces/ImageObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessengerType } from '../../types';
import { AbstractImageMessage } from '../AbstractImageMessage';
import { MessengerImage } from './MessengerImage';

export class Image extends MessengerImage {
  constructor(
    image: ImageObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
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
