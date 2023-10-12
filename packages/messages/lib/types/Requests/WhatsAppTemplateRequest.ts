import { WhatsAppPolicyType, WhatsAppTemplateType } from '../Channels';

/**
 * Represents a request for sending a template message via the WhatsApp channel.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppTemplateRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'template' for a template message.
   */
  message_type: 'template';

  /**
   * The template content of the message, including the template type.
   */
  template: WhatsAppTemplateType;

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
   * The policy and locale settings for sending the WhatsApp template message.
   */
  whatsapp: WhatsAppPolicyType;
}
