import { ImageObject } from '../../interfaces/ImageObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { MessageConfig } from '../../interfaces/Viber/MessageConfig';
import { ViberImageParams } from '../../types';
import { AbstractImageMessage } from '../AbstractImageMessage';
import { ViberImage } from './ViberImage';

export class Image extends ViberImage {
  constructor(
    image: ImageObject,
    to: string,
    from: string,
    viberService?: MessageConfig,
    clientRef?: string,
  ) {
    super({
      image: image,
      to: to,
      from: from,
      clientRef: clientRef,
      viberService: viberService,
    } as ViberImageParams);
  }
}
