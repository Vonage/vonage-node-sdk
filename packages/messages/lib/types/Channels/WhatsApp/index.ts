import { WhatsAppAudioParams } from './WhatsAppAudioParams.js';
import { WhatsAppCustomParams } from './WhatsAppCustomParams.js';
import { WhatsAppFileParams } from './WhatsAppFileParams.js';
import { WhatsAppImageParams } from './WhatsAppImageParams.js';
import { WhatsAppStickerIdType } from './WhatsAppStickerIdType.js';
import { WhatsAppStickerParams } from './WhatsAppStickerParams.js';
import { WhatsAppTemplateParams } from './WhatsAppTemplateParams.js';
import { WhatsAppTextParams } from './WhatsAppTextParams.js';
import { WhatsAppVideoParams } from './WhatsAppVideoParams.js';
import { WhatsAppReactionParams } from './WhatsAppReactionParams.js';
import { Channels } from '../../../enums/index.js';

export * from './WhatsAppAudioParams.js';
export * from './WhatsAppCustomParams.js';
export * from './WhatsAppCustomType.js';
export * from './WhatsAppFileParams.js';
export * from './WhatsAppImageParams.js';
export * from './WhatsAppPolicyType.js';
export * from './WhatsAppStickerIdType.js';
export * from './WhatsAppStickerParams.js';
export * from './WhatsAppStickerUrlType.js';
export * from './WhatsAppTemplateParams.js';
export * from './WhatsAppTemplateType.js';
export * from './WhatsAppTextParams.js';
export * from './WhatsAppVideoParams.js';
export * from './WhatsAppParams.js';
export * from './WhatsAppReactionParams.js';
export * from './WhatAppReactionType.js';

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
  | WhatsAppReactionParams
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
  channel: Channels.WHATSAPP | string;
} & AnyWhatsAppParams;
