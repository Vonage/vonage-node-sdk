import { ViberChannel } from './viberChannel';
import { WhatsappChannel } from './whatsappChannel';
import { MmsChannel } from './mmsChannel';
import { SmsChannel } from './smsChannel';
import { WebsocketChannel } from './websocketChannel';
import { VbcChannel } from './vbcChannel';
import { MessengerChannel } from './messengerChannel';
import { PstnChannel } from './pstnChannel';
import { SipChannel } from './sipChannel';

/**
 * Represents a user with various properties and communication channels.
 */
export type UserType = {
  /**
   * The unique ID associated with the user.
   */
  id?: string;

  /**
   * The name of the user.
   */
  name?: string;

  /**
   * The display name of the user.
   */
  displayName?: string;

  /**
   * The URL of the user's image.
   */
  imageUrl?: string;

  /**
   * Custom data associated with the user.
   */
  properties?: {
    /**
     * Custom key-value pairs for user data.
     */
    customData: Record<string, string>;
  };

  /**
   * Communication channels associated with the user.
   */
  channels?: {
    /**
     * PSTN (Public Switched Telephone Network) channels.
     */
    pstn?: Array<PstnChannel>;

    /**
     * SIP (Session Initiation Protocol) channels.
     */
    sip?: Array<SipChannel>;

    /**
     * VBC (Voice Business Communication) channels.
     */
    vbc?: Array<VbcChannel>;

    /**
     * WebSocket channels.
     */
    websocket?: Array<WebsocketChannel>;

    /**
     * SMS (Short Message Service) channels.
     */
    sms?: Array<SmsChannel>;

    /**
     * MMS (Multimedia Messaging Service) channels.
     */
    mms?: Array<MmsChannel>;

    /**
     * WhatsApp channels.
     */
    whatsapp?: Array<WhatsappChannel>;

    /**
     * Viber channels.
     */
    viber?: Array<ViberChannel>;

    /**
     * Messenger channels.
     */
    messenger?: Array<MessengerChannel>;
  };
};

