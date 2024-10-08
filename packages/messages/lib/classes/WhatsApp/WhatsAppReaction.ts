import { AbstractMessage } from '../AbstractMessage';
import {
  WhatsAppReactionParams,
  WhatsAppReactionType,
  WhatsAppContext,
} from '../../types';

/**
 * Represents a reaction message for WhatsApp.
 *
 * @group WhatsApp
 */
export class WhatsAppReaction
  extends AbstractMessage
  implements WhatsAppReactionParams
{
  public channel: 'whatsapp';
  public messageType: 'reaction';
  public reaction: WhatsAppReactionType;

  public context?: WhatsAppContext;

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
  public constructor(params: WhatsAppReactionParams) {
    super(params);
    this.channel = 'whatsapp';
    this.messageType = 'reaction';
    this.reaction = params.reaction;
    if (params.context) {
      this.context = params.context;
    }
  }
}
