import { AnyMessengerChannel } from './Messenger';
import { AnyMMSChannel } from './MMS';
import { AnyViberChannel } from './Viber';
import { AnyWhatsAppChannel } from './WhatsApp';
import { SMSChannel } from './SMSParams';
import { AnyRCSChannel } from './RCS';

export * from './Messenger';
export * from './MMS';
export * from './Viber';
export * from './WhatsApp';
export * from './SMSParams';
export * from './RCS';

/**
 * Represents a union type that can be any of the specific channel message
 * parameters or configurations, including Messenger, MMS, Viber, WhatsApp, or SMS.
 */
export type AnyChannel =
  | AnyMessengerChannel
  | AnyMMSChannel
  | AnyViberChannel
  | AnyWhatsAppChannel
  | SMSChannel
  | AnyRCSChannel;

export type MessageWithFailover = {
    failover?: Array<AnyChannel>
  } | AnyChannel;
