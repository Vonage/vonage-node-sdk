import { ImageObject } from '../../interfaces/index.js';
import { MessageImageType, MessageParamsImage } from '../../types/index.js';
import { MMSImage } from './MMSImage.js';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * Represents an image message for the MMS channel.
 *
 * @deprecated Please use the MMSImage class instead.
 *
 * @group MMS
 */
export class Image extends MMSImage {
  /**
   * Constructs a new `Image` instance for the MMS channel.
   *
   * @param {ImageObject} image - The image content of the message.
   * @param {string} to - The recipient of the message.
   * @param {string} from - The sender of the message.
   * @param {string} clientRef - The client reference for the message.
   */
  constructor(
    image: ImageObject,
    to?: string,
    from?: string,
    clientRef?: string,
  ) {
    log('Please update to use the MMSImage class instead');
    super({
      image: image as MessageImageType,
      to: to,
      from: from,
      clientRef: clientRef,
    } as MessageParamsImage);
  }
}
