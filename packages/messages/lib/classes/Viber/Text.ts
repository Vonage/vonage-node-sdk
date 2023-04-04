import { MessageConfig } from '../../interfaces/Viber/MessageConfig';
import { ViberActionParams } from '../../types';
import { ViberText } from './ViberText';
import debug from 'debug';

const log = debug('vonage:messages:viber');

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
    log('Please update to use the ViberText class instead');
    super({
      text: text,
      to: to,
      from: from,
      viberService: viberService as unknown as ViberActionParams,
      clientRef: clientRef,
    });
  }
}
