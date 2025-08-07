import { Channels } from '../../..//enums';
import { MessageParams } from '../../MessageParams';

export type WhatsAppContext = {
  /**
   * The UUID of the message being replied to/quoted.
   */
  messageUUID: string;
};

export type WhatsAppParams = {
  channel: Channels.WHATSAPP | string;

  /**
   * An optional context used for quoting/replying to a specific meesage in a
   * conversation. When used, the WhatsApp UI will display the new message
   * along with a contextual bubble that displays the quoted/replied to
   * message's content
   */
  context?: WhatsAppContext;
} & MessageParams;
