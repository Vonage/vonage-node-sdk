import { ImageObject } from '../../interfaces/ImageObject';
import { MessageConfig } from '../../interfaces/Viber/MessageConfig';
import { ViberImageParams } from '../../types';
import { ViberImage } from './ViberImage';
import debug from 'debug';

const log = debug('vonage:messages:viber');

/**
 * @deprecated please use ViberImage instead
 */
export class Image extends ViberImage {
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
      viberService: viberService,
    } as ViberImageParams);
  }
}
