import { WhatsAppParams } from './WhatsAppParams';
import { WhatsAppReactionType } from './WhatAppReactionType';
/**
 * Represents WhatsApp reaction message parameters.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppReactionParams = {
  reaction: WhatsAppReactionType;
} & WhatsAppParams;
