import { PhoneNumberChannel } from '../phoneNumberChannel.js';
import { SipChannel } from '../sipChannel.js';
import { AppChannel } from '../appChannel.js';
import { WebSocketChannel } from '../websocketChannel.js';
import { VbcChannel } from '../vbcChannel.js';
import { ConversationCallbackRequest } from './conversationCallbackRequest.js';

/**
 * Type representing a request to create a conversation.
 */
export type CreateConversationRequest = {
  /**
   * Your internal conversation name.
   */
  name: string;

  /**
   * The public-facing name of the conversation.
   */
  display_name: string;

  /**
   * An image URL associated with the conversation.
   */
  image_url: string;

  /**
   * Conversation properties (optional).
   */
  properties?: {

    /**
     * Time to leave in seconds for an empty conversation (optional).
     */
    ttl?: number;

    /**
     * Custom conversation type (optional).
     */
    type?: string;

    /**
     * Custom sort key (optional).
     */
    custom_sort_key?: string;

    /**
     * Custom data as key-value pairs (optional).
     */
    custom_data?: Record<string, unknown>;
  };

  /**
   * Communication channels (optional).
   */
  numbers?: Array<
    PhoneNumberChannel |
    SipChannel |
    AppChannel |
    WebSocketChannel |
    VbcChannel
  >;

  /**
   * Callback information (optional).
   */
  callback?: ConversationCallbackRequest;
};
