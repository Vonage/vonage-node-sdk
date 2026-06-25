import { AnyMessengerChannel } from './Messenger/index.js';
import { AnyMMSChannel } from './MMS/index.js';
import { AnyViberChannel } from './Viber/index.js';
import { AnyWhatsAppChannel } from './WhatsApp/index.js';
import { SMSChannel } from './SMSParams.js';
import { AnyRCSChannel } from './RCS/index.js';
import { AnyEmailChannel } from './Email/index.js';

export * from './Messenger/';
export * from './MMS/';
export * from './Viber/';
export * from './WhatsApp/';
export * from './SMSParams';
export * from './RCS/';

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
  | AnyRCSChannel
  | AnyEmailChannel;

export type MessageWithFailover = {
  failover?: Array<AnyChannel>
} | AnyChannel;
