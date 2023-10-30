import { ImageObject } from '../../interfaces/ImageObject';
import { WhatsAppImage } from './WhatsAppImage';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated Please use the WhatsAppImage class instead
 *
 * @group WhatsApp
 */
export class Image extends WhatsAppImage {
  /**
   * Constructs a new `Image` instance for WhatsApp.
   *
   * @param {ImageObject} image - The image object for the message.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
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
