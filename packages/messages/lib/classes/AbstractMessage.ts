import { MessageTypes, Channels } from '../enums/index.js';
import { MessageParams } from '../types/index.js';

/**
 * An abstract base class for message objects.
 */
export abstract class AbstractMessage implements MessageParams {

  public abstract messageType: MessageTypes;

  public abstract channel: Channels;

  /**
   * The recipient of the message.
   */
  public to: string;

  /**
   * The sender of the message.
   */
  public from: string;

  /**
   * An optional client reference for the message.
   */
  public clientRef?: string;

  /**
   * Specifies the URL to which Status Webhook messages will be sent for this
   * particular message. Over-rides account-level and application-level Status
   * Webhook url settings on a per-message basis.
   */
  public webhookUrl?: string;

  /**
   * Specifies which version of the Messages API will be used to send Status
   * Webhook messages for this particular message. For example, if v0.1 is
   * set, then the JSON body of Status Webhook messages for this message will
   * be sent in Messages v0.1 format. Over-rides account-level and
   * application-level API version settings on a per-message basis.
   */
  public webhookVersion?: 'v0.1' | 'v1';

  /**
   * Constructs a new `AbstractMessage` instance.
   *
   * @param {MessageParams} params - The parameters for creating a message.
   */
  public constructor(params: Omit<MessageParams, 'channel' | 'messageType'>) {
    this.to = params.to;
    this.from = params.from;
    this.clientRef = params.clientRef;
    this.webhookUrl = params.webhookUrl;
    this.webhookVersion = params.webhookVersion;
  }
}
