import { AnyMessengerParams } from "./Channels/Messenger";
import { AnyViberParams } from "./Channels/Viber";
import { AnyWhatsAppParams } from "./Channels/WhatsApp";
import { AnyMMSParams } from "./Channels/MMS";
import { SMSParams } from "./Channels/SMSParams";

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
