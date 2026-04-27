/**
 * An abstract base class for message objects.
 */
export class AbstractMessage {

  /**
   * The recipient of the message.
   */
  to;

  /**
   * The sender of the message.
   */
  from;

  /**
   * An optional client reference for the message.
   */
  clientRef;

  /**
   * Specifies the URL to which Status Webhook messages will be sent for this
   * particular message. Over-rides account-level and application-level Status
   * Webhook url settings on a per-message basis.
   */
  webhookUrl;

  /**
   * Specifies which version of the Messages API will be used to send Status
   * Webhook messages for this particular message. For example, if v0.1 is
   * set, then the JSON body of Status Webhook messages for this message will
   * be sent in Messages v0.1 format. Over-rides account-level and
   * application-level API version settings on a per-message basis.
   */
  webhookVersion;

  /**
   * Constructs a new `AbstractMessage` instance.
   *
   * @param {MessageParams} params - The parameters for creating a message.
   */
  constructor(params) {
    this.to = params.to;
    this.from = params.from;
    this.clientRef = params.clientRef;
    this.webhookUrl = params.webhookUrl;
    this.webhookVersion = params.webhookVersion;
  }
}
