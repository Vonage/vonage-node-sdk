import {
  MessengerAudioInterface,
  MessengerFileInterface,
  MessengerImageInterface,
  MessengerTextInterface,
  MessengerVideoInterface,
  MMSAudioInterface,
  MMSImageInterface,
  MMSVcardInterface,
  MMSVideoInterface,
  SMSTextInterface,
  ViberFileInterface,
  ViberImageInterface,
  ViberTextInterface,
  ViberVideoInterface,
  WhatsAppAudioInterface,
  WhatsAppCustomInterface,
  WhatsAppFileInterface,
  WhatsAppImageInterface,
  WhatsAppStickerInterface,
  WhatsAppTemplateInterface,
  WhatsAppTextInterface,
  WhatsAppVideoInterface,
} from '../interfaces';

export type SendMessageParams =
    | MessengerAudioInterface
    | MessengerFileInterface
    | MessengerImageInterface
    | MessengerTextInterface
    | MessengerVideoInterface
    | MMSAudioInterface
    | MMSImageInterface
    | MMSVcardInterface
    | MMSVideoInterface
    | SMSTextInterface
    | ViberFileInterface
    | ViberImageInterface
    | ViberTextInterface
    | ViberVideoInterface
    | WhatsAppAudioInterface
    | WhatsAppCustomInterface
    | WhatsAppFileInterface
    | WhatsAppImageInterface
    | WhatsAppStickerInterface
    | WhatsAppTemplateInterface
    | WhatsAppTextInterface
    | WhatsAppVideoInterface
