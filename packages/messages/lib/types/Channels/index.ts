import { AnyMessengerChannel } from './Messenger/index.js';
import { AnyMMSChannel } from './MMS/index.js';
import { AnyViberChannel } from './Viber/index.js';
import { AnyWhatsAppChannel } from './WhatsApp/index.js';
import { SMSChannel } from './SMSParams.js';
import { AnyRCSChannel } from './RCS/index.js';

export * from './Messenger/index.js';
export * from './MMS/index.js';
export * from './Viber/index.js';
export * from './WhatsApp/index.js';
export * from './SMSParams.js';
export * from './RCS/index.js';

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
