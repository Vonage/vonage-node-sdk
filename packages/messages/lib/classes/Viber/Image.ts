import { ImageObject } from '../../interfaces';
import { MessageConfig } from '../../interfaces/Viber/MessageConfig';
import { ViberImageParams, ViberService } from '../../types';
import { ViberImage } from './ViberImage';
import debug from 'debug';

const log = debug('vonage:messages:viber');

/**
 * Represents an image message for the Viber channel.
 *
 * @deprecated Please use the ViberImage class instead.
 *
 * @group Viber
 */
export class Image extends ViberImage {
  /**
   * Constructs a new `Image` instance for the Viber channel.
   *
   * @param {ImageObject} image - The image content of the message.
   * @param {string} to - The recipient's Viber ID.
   * @param {string} from - The sender's Viber ID.
   * @param {MessageConfig} viberService - The Viber service configuration.
   * @param {string} clientRef - The client reference for the message.
   */
  constructor(
    image: ImageObject,
    to: string,
    from: string,
    viberService?: MessageConfig,
    clientRef?: string,
  ) {
    log('Please update to use the ViberImage class instead');
    super({
      image: image,
      to: to,
      from: from,
      clientRef: clientRef,
      viberService: viberService as unknown as ViberService,
    } as ViberImageParams);
  }
}
