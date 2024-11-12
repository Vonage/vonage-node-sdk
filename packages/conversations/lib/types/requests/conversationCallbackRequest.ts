/**
 * Type representing a callback object in a conversation request.
 */
export type ConversationCallbackRequest = {
  /**
   * The callback URL.
   */
  url?: string;

  /**
   * The event mask for the callback.
   */
  event_mask?: string;

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
    ncco_url?: string;
  };

  /**
   * The callback method.
   */
  method: 'POST' | 'GET';
};
