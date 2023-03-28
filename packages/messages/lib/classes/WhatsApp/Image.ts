import { ImageObject } from '../../interfaces/ImageObject';
import { WhatsAppImage } from './WhatsAppImage';

export class Image extends WhatsAppImage {
  constructor(
    image: ImageObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      image: image,
    });
  }
}
