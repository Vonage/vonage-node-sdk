export type WhatsAppReactionRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'reaction' for a text message.
   */
  message_type: 'reaction';

  /**
   * The recipient's identifier.
   */
  to: string;

  /**
   * The sender's identifier.
   */
  from: string;

  /**
   * The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
   */
  channel: 'whatsapp';

  /**
   * Specifies which version of the Messages API will be used to send Status
   * Webhook messages for this particular message. For example, if v0.1 is
   * set, then the JSON body of Status Webhook messages for this message will
   * be sent in Messages v0.1 format. Over-rides account-level and
   * application-level API version settings on a per-message basis.
   */
  webhook_version: 'v0.1' | 'v1';

  /**
   * Specifies the URL to which Status Webhook messages will be sent for this
   * particular message. Over-rides account-level and application-level Status
   * Webhook url settings on a per-message basis.
   */
  webhook_url: string;

  /**
   * A context used for quoting/replying/reacting to a specific message in a
   * conversation. When used for quoting or replying, the WhatsApp UI will
   * display the new message along with a contextual bubble that displays the
   * quoted/replied to message's content. When used for reacting the WhatsApp
   * UI will display the reaction emoji below the reacted to message.
   */
  context: {
    /**
     * The UUID of the message being quoted/replied/reacted to.
     */
    message_uuid: string;
  };

  reaction: {
    /**
     * The action taken.
     */
    action: 'react' | 'unreact';

    /**
     * The emoji used as a reaction.
     */
    emoji?: string
  }

}
