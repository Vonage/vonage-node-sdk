import { AnyChannel } from './anyChannel';
import { ConversationCallback } from './conversationCallback';
import { ConversationState } from '../enums';

/**
 * Represents a conversation
 */
export type Conversation = {
  /**
   * The unique identifier for this conversation.
   * @readonly
   */
  id?: string;

  /**
   * Your internal conversation name. Must be unique.
   */
  name?: string;

  /**
   * The public-facing name of the conversation.
   */
  displayName?: string;

  /**
   * An image URL associated with the conversation.
   */
  imageUrl?: string;

  /**
   * The conversation's status.
   *
   * @readonly
   */
  status?: ConversationState;

  /**
   * The last Event ID in this conversation.
   *
   * This ID can be used to retrieve a specific event.
   * @readonly
   */
  sequenceNumber?: number;

  /**
   * The conversation's state.
   */
  state?: ConversationState;

  /**
   * The conversation's properties
   */
  properties?: {
    /**
     * The conversation's time to leave.
     *
     * After how many seconds the conversation is deleted.
     */
    ttl?: number;

    /**
     * The conversation's type.
     */
    type: string;

    /**
     * The conversation's custom sort key.
     */
    customSortKey: string;

    /**
     * Custom key-value pairs to be included with the conversation.
     */
    customData: Record<string, unknown>;
  },

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

  /**
   * Communication channels (optional).
   *
   * @remarks
   * This is not set when fetching a converstion from the API.
   */
  numbers?: Array<AnyChannel>;

  /**
   * Callback information (optional).
   *
   * @remarks
   * This is not set when fetching a converstion from the API.
   */
  callback?: ConversationCallback;
};
