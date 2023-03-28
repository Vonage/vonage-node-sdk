import { CustomPayload } from '../../interfaces/WhatsApp/CustomPayload';
import { WhatsAppCustomType } from '../../types';
import { WhatsAppCustom } from './WhatsAppCustom';

export class CustomMessage extends WhatsAppCustom {
  constructor(
    custom: CustomPayload,
    to: string,
    from: string,
    clientRef?: string,
  ) {
    super({
      to: to,
      from: from,
      clientRef: clientRef,
      custom: custom as WhatsAppCustomType,
    });
  }
}
