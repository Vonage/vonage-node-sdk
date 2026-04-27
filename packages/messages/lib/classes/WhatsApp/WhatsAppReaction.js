import { AbstractMessage } from '../AbstractMessage';

import { Channels, MessageTypes } from '../../enums/';

/**
 * Represents a reaction message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppReaction extends
AbstractMessage
{
  /**
   * The channel for this message (always 'whatsapp').
   */
  channel = Channels.WHATSAPP;

  /**
   * The type of message (always 'reaction').
   */
  messageType = MessageTypes.REACTION;

  /**
   * The reaction to send
   */
  reaction;

  /**
   * The WhatsApp Context
   */
  context;

  /**
   * Send via MM Lite API only this is valid for marketing template messages
   * only, and for Alpha release only
   *
   * @deprecated
   */
  category;

  /**
   * Sends a reaction message to a WhatsApp user.
   *
   * @param {WhatsAppReactionParams} params - The parameters for creating a WhatsApp reaction message.
   * @example
   * Send a reaction
   * ```ts
   * import { WhatsAppReaction } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppReaction({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  reaction: {
   *    action: 'react',
   *    emoji: '😍',
   *  }
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   *
   * @example
   * Remove reaction
   * ```ts
   * import { WhatsAppReaction } from '@vonage/messages';
   *
   * const { messageUUID } = await messagesClient.send(new WhatsAppReaction({
   *  to: TO_NUMBER,
   *  from: FROM_NUMBER,
   *  reaction: {
   *    action: 'unreact',
   *  }
   *  clientRef: 'my-personal-reference',
   * }));
   *
   * console.log(`Message sent successfully with UUID ${messageUUID}`);
   * ```
   */
  constructor(params) {
    super(params);
    this.reaction = params.reaction;
    this.category = params.category;

    if (params.context) {
      this.context = params.context;
    }
  }
}
