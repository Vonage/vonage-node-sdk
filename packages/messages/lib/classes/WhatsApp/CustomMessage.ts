import { CustomPayload } from '../../interfaces/WhatsApp/CustomPayload';
import { WhatsAppCustomType } from '../../types';
import { WhatsAppCustom } from './WhatsAppCustom';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated Please use WhatsAppCustom class instead
 *
 * @group WhatsApp
 */
export class CustomMessage extends WhatsAppCustom {
  /**
   * Constructs a new `CustomMessage` instance for WhatsApp.
   *
   * @param {CustomPayload} custom - The custom payload for the message.
   * @param {string} to - The recipient's WhatsApp number.
   * @param {string} from - The sender's WhatsApp number.
   * @param {string} clientRef - (Optional) A unique client reference for the message.
   */
  constructor(
    custom: CustomPayload,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    log('Please update to use the WhatsAppCustom class instead');
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      custom: custom as WhatsAppCustomType,
    });
  }
}
