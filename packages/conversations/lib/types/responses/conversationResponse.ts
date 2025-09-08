import { Conversation } from '../conversation.js';
import { APILinks } from '@vonage/server-client';

/**
 * Represents a conversation as it is returned from the API.
 */
export type ConversationResponse = {
  /**
   * The public-facing name of the conversation.
   */
  display_name?: string;

  /**
   * An image URL associated with the conversation.
   */
  image_url?: string;

  /**
   *
   * The last Event ID in this conversation. This ID can be used to retrieve a specific event.
   */
  sequence_number: number;

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
    custom_sort_key: string;

    /**
     * Custom key-value pairs to be included with the conversation.
     */
    custom_data: Record<string, unknown>;
  },
} & Omit<
  Conversation,
  'sequenceNumber' | 'displayName' | 'imageUrl' | 'properties'
> & APILinks;
