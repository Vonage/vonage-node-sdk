/**
 * Represents a request for sending a content email message.
 *
 * @group Email
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure request before the client will transform the keys into `camelCase`.
 */
export type EmailContentRequest = {
  /**
   * The sender's email address (or "Display Name <address@domain.com>").
   */
  from: string;

  /**
   * The recipient's email address.
   */
  to: string;

  /**
   * The channel, always 'email'.
   */
  channel: 'email';

  /**
   * The message type, always 'content'.
   */
  message_type: 'content';

  /**
   * An ordered array of content parts — each item is either a text or HTML block.
   */
  content: Array<
    | { type: 'text'; text: string }
    | { type: 'html'; body: string }
  >;

  /**
   * Email-specific settings such as subject, importance, priority and sensitivity.
   */
  email: {
    subject: string;
    importance?: string;
    priority?: string;
    sensitivity?: string;
  };

  /**
   * An optional client reference for the message.
   */
  client_ref?: string;

  /**
   * An optional webhook URL to receive status updates.
   */
  webhook_url?: string;

  /**
   * An optional webhook version.
   */
  webhook_version?: string;
};
