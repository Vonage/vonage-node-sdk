import { ImageObject } from '../../interfaces';
import { MessageImageType, MessageParamsImage } from '../../types';
import { MMSImage } from './MMSImage';

export class Image extends MMSImage {
  constructor(
    image: ImageObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    super({
      image: image as MessageImageType,
      to: to,
      from: from,
      clientRef: clientRef,
    } as MessageParamsImage);
  }
}
