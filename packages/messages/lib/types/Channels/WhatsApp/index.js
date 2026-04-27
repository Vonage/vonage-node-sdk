/**
 * Represents a union type that can be any of the WhatsApp-specific message
 * parameters or configurations.
 *
 * @typedef {Object} AnyWhatsAppParams
 */

/**
 * Represents a union type that includes the 'channel' property set to
 * 'whatsapp_service' along with any of the WhatsApp-specific message parameters or
 * configurations.
 *
 * @typedef {Object} AnyWhatsAppChannel
 * @property {Channels.WHATSAPP | string} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 */

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

/**
 * Represents a union type that includes the 'channel' property set to
 * 'whatsapp_service' along with any of the WhatsApp-specific message parameters or
 * configurations.
 *
 * @group WhatsApp
 */export {};
