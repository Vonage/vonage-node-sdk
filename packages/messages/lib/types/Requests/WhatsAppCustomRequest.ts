/**
 * Represents a request for sending a custom message via the WhatsApp channel.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppCustomRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'custom' for a custom message.
   */
  message_type: 'custom';

  /**
   * The custom content of the message as a record of unknown type.
   */
  custom: Record<string, unknown>;

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
}
