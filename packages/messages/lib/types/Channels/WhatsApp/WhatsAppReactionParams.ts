import { WhatsAppParams } from './WhatsAppParams.js';
import { WhatsAppReactionType } from './WhatAppReactionType.js';

/**
 * Represents WhatsApp reaction message parameters.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppReactionParams = {
  reaction: WhatsAppReactionType;
} & WhatsAppParams;
