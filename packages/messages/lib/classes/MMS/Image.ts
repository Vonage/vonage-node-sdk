import { ImageObject } from '../../interfaces';
import { MessageImageType, MessageParamsImage } from '../../types';
import { MMSImage } from './MMSImage';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * @deprecated please use MMSImage instead
 */
export class Image extends MMSImage {
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
