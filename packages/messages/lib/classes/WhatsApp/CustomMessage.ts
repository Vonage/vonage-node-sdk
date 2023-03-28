import { CustomPayload } from '../../interfaces/WhatsApp/CustomPayload';
import { WhatsAppCustomType } from '../../types';
import { WhatsAppCustom } from './WhatsAppCustom';
import debug from 'debug';

const log = debug('vonage:messages:whatsapp');

/**
 * @deprecated please use WhatsAppCustom instead
 */
export class CustomMessage extends WhatsAppCustom {
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
