import { APILinks } from "@vonage/server-client";
import { ConversationResponse } from "./conversationResponse.js";

/**
 * Represents the response for listing conversations retrieved from the API.
 */
export type ConversationPageResponse = {
  /**
   * The number of records returned in this response.
   */
  page_size: number;

  /**
   * Embedded data containing a list of conversations.
   */
  _embedded: {
    conversations: ConversationResponse[];
  };
} & APILinks;
