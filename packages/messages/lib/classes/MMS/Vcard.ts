import { MMSVcard } from './MMSVcard';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * @deprecated Please use MMSVcard intead
 */
export class Vcard extends MMSVcard {
  constructor(
    vcardUrl: string,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    log('Please update to use the MMSVcard class instead');
    super({
      vcard: { url: vcardUrl },
      to: to,
      from: from,
      clientRef: clientRef,
    });
  }
}
