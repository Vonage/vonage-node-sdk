import { MessageConfig } from '../../interfaces/Viber/MessageConfig.js';
import { ViberActionParams } from '../../types/index.js';
import { ViberText } from './ViberText.js';
import debug from 'debug';

const log = debug('vonage:messages:viber');

/**
 * Represents a text message for the Viber channel.
 *
 * @deprecated Please use the ViberText class instead.
 *
 * @group Viber
 */
export class Text extends ViberText {
  /**
   * Constructs a new `Text` instance for the Viber channel.
   *
   * @param {string} text - The text content of the message.
   * @param {string} to - The recipient's Viber ID.
   * @param {string} from - The sender's Viber ID.
   * @param {MessageConfig} viberService - The Viber service configuration.
   * @param {string} clientRef - The client reference for the message.
   */
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
