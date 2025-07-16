import { Channels } from '../enums';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * Represents the parameters for a message.
 */
export type MessageParams = {
  /**
   * The type of message to send.
   */
  messageType: MessageTypes | string;

  /**
   * The channel to sent the message through
   */
  channel: Channels | string;

  /**
   * The ID of the message recipient.
   */
  to: string;

  /**
   * The ID of the message sender.
   */
  from: string;

  /**
   * Client reference of up to 100 characters.
   * The reference will be present in every message status.
   */
  clientRef?: string;

  /**
   * Specifies the URL to which Status Webhook messages will be sent for this
   * particular message. Over-rides account-level and application-level Status
   * Webhook url settings on a per-message basis.
   */
  webhookUrl?: string;

  /**
   * Specifies which version of the Messages API will be used to send Status
   * Webhook messages for this particular message. For example, if v0.1 is
   * set, then the JSON body of Status Webhook messages for this message will
   * be sent in Messages v0.1 format. Over-rides account-level and
   * application-level API version settings on a per-message basis.
   */
  webhookVersion?: 'v0.1' | 'v1';
};
