import { MessageConfig } from '../../interfaces/Viber/MessageConfig';
import { ViberActionParams } from '../../types';
import { ViberText } from './ViberText';

/**
 * @deprecated Please use ViberText
 */
export class Text extends ViberText {
  constructor(
    text: string,
    to: string,
    from: string,
    viberService?: MessageConfig,
    clientRef?: string,
  ) {
    super({
      text: text,
      to: to,
      from: from,
      viberService: viberService as unknown as ViberActionParams,
      clientRef: clientRef,
    });
  }
}
