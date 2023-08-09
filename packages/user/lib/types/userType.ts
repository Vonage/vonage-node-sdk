import { ViberChannel } from './viberChannel';
import { WhatsappChannel } from './whatsappChannel';
import { MmsChannel } from './mmsChannel';
import { SmsChannel } from './smsChannel';
import { WebsocketChannel } from './websocketChannel';
import { VbcChannel } from './vbcChannel';
import { MessengerChannel } from './messengerChannel';
import { PstnChannel } from './pstnChannel';
import { SipChannel } from './sipChannel';

export type UserType = {
  id?: string;
  name?: string;
  displayName?: string;
  imageUrl?: string;
  properties?: {
    customData: Record<string, string>;
  };
  channels?: {
    pstn?: Array<PstnChannel>;
    sip?: Array<SipChannel>;
    vbc?: Array<VbcChannel>;
    websocket?: Array<WebsocketChannel>;
    sms?: Array<SmsChannel>;
    mms?: Array<MmsChannel>;
    whatsapp?: Array<WhatsappChannel>;
    viber?: Array<ViberChannel>;
    messenger?: Array<MessengerChannel>;
  };
};
