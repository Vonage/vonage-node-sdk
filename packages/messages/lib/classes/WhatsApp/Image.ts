import { ImageObject } from '../../interfaces/ImageObject';
import { WhatsAppImage } from './WhatsAppImage';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use WhatsAppImage instead
 */
export class Image extends WhatsAppImage {
  constructor(
    image: ImageObject,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    log('Please update to use the WhatsAppImage class instead');
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      image: image,
    });
  }
}
