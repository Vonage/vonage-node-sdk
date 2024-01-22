
/**
 * Type representing a callback object in a conversation request.
 */
export type ConversationCallback = {
  /**
   * The callback URL.
   */
  url?: string;

  /**
   * The event mask for the callback.
   */
  eventMask?: string;

  /**
   * Callback parameters.
   */
  params?: {
    /**
     * The application ID for the callback.
     */
    applicationId?: string;

    /**
     * The NCCO URL for the callback.
     */
    nccoUrl?: string;
  };

  /**
   * The callback method.
   */
  method?: 'POST' | 'GET';
};
