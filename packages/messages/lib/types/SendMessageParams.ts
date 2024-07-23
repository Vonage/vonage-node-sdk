import {
  AnyMessengerParams,
  AnyViberParams,
  AnyWhatsAppParams,
  AnyMMSParams,
  SMSParams,
} from './Channels';

/**
 * Represents parameters for sending various types of messages.
 * This union type can be used to send messages across different platforms like
 * Messenger, MMS, SMS, Viber, WhatsApp, etc.
 * Use the corresponding Type for the specific message type you want to send.
 */
export type SendMessageParams =
  AnyMessengerParams |
  AnyViberParams |
  AnyWhatsAppParams |
  AnyMMSParams |
  SMSParams
