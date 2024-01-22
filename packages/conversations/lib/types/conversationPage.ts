import { APILink } from '@vonage/server-client';
import { Conversation } from './conversation';

/**
 * A page of conversations.
 */
export type ConversationPage = {
  /**
   * How many items are in the page.
   */
  pageSize: number;

  /**
   * Conversations for the page.
   */
  conversations: Array<Conversation>;

  /**
   * HAL links for the page.
   */
  links?: Record<string, APILink>;
}
