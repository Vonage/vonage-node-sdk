export type WhatsAppReactionType = {
  /**
   * The action taken.
   */
  action: 'react' | 'unreact';

  /**
   * The emoji used as a reaction.
   */
  emoji?: string;
}
