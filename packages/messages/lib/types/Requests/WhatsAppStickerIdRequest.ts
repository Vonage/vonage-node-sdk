/**
 * Represents a request for sending a sticker message via the WhatsApp channel using a sticker ID.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppStickerIdRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'sticker' for a sticker message.
   */
  message_type: 'sticker';

  /**
   * The sticker content of the message, including the sticker ID.
   */
  sticker: {
    /**
     * The ID of the sticker to be sent.
     */
    id: string;
  };

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
