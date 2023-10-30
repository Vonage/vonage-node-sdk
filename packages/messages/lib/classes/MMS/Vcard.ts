import { MMSVcard } from './MMSVcard';
import debug from 'debug';

const log = debug('vonage:messages:mms');

/**
 * @deprecated Please use MMSVcard instead
 *
 * @group MMS
 */
export class Vcard extends MMSVcard {
  /**
   * Constructs a new `Vcard` instance for the MMS channel.
   *
   * @param {string} vcardUrl - The URL of the vCard.
   * @param {string} to - The recipient of the message.
   * @param {string} from - The sender of the message.
   * @param {string} clientRef - The client reference for the message.
   */
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
