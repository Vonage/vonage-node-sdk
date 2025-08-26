import { ConversationState } from '../enums/index.js';

export type MessageConversationBody = {
  /**
   * The conversation id.
   */
  id: string;

  /**
   * The conversation name.
   */
  name: string;

  /**
   * The conversation display name.
   */
  displayName?: string;

  /**
   * The image for the conversation.
   */
  imageUrl?: string;

  /**
   * The conversation state.
   */
  state: ConversationState;

  /**
   * Timestamps for when the conversation was created, updated, and destroyed.
   *
   * @readonly
   */
  timestamp?: {
    /**
     * The time the conversation was created.
     * @readonly
     */
    created?: string;

    /**
     * The time the conversation was last updated.
     * @readonly
     */
    updated?: string;

    /**
     * The time the conversation was destroyed (if applicable).
     * @readonly
     */
    destroyed?: string;
  };
}
