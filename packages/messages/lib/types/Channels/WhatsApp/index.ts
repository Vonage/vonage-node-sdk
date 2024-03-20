import { WhatsAppAudioParams } from './WhatsAppAudioParams';
import { WhatsAppCustomParams } from './WhatsAppCustomParams';
import { WhatsAppFileParams } from './WhatsAppFileParams';
import { WhatsAppImageParams } from './WhatsAppImageParams';
import { WhatsAppStickerIdType } from './WhatsAppStickerIdType';
import { WhatsAppStickerParams } from './WhatsAppStickerParams';
import { WhatsAppTemplateParams } from './WhatsAppTemplateParams';
import { WhatsAppTextParams } from './WhatsAppTextParams';
import { WhatsAppVideoParams } from './WhatsAppVideoParams';
import { Channels } from '../../../enums';

export * from './WhatsAppAudioParams';
export * from './WhatsAppCustomParams';
export * from './WhatsAppCustomType';
export * from './WhatsAppFileParams';
export * from './WhatsAppImageParams';
export * from './WhatsAppPolicyType';
export * from './WhatsAppStickerIdType';
export * from './WhatsAppStickerParams';
export * from './WhatsAppStickerUrlType';
export * from './WhatsAppTemplateParams';
export * from './WhatsAppTemplateType';
export * from './WhatsAppTextParams';
export * from './WhatsAppVideoParams';
export * from './WhatsAppParams';

/**
 * Represents a union type that can be any of the WhatsApp-specific message
 * parameters or configurations.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type AnyWhatsAppParams =
  | WhatsAppAudioParams
  | WhatsAppCustomParams
  | WhatsAppFileParams
  | WhatsAppImageParams
  | WhatsAppStickerIdType
  | WhatsAppStickerParams
  | WhatsAppTemplateParams
  | WhatsAppTextParams
  | WhatsAppVideoParams;

/**
 * Represents a union type that includes the 'channel' property set to
 * 'whatsapp_service' along with any of the WhatsApp-specific message parameters or
 * configurations.
 *
 * @group WhatsApp
 */
export type AnyWhatsAppChannel = {
  /**
   * The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
   */
  channel: Channels.WHATSAPP;
} & AnyWhatsAppParams;
