/**
 * Represents a request for sending an image message via the WhatsApp channel.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppImageRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'image' for an image message.
   */
  message_type: 'image';

  /**
   * The image content of the message, including the URL of the image and an optional caption.
   */
  image: {
    /**
     * The URL of the image to be sent.
     */
    url: string;

    /**
     * An optional caption for the image.
     */
    caption?: string;
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

  /**
   * The amount of time in seconds the message will live for
   */
  ttl?: number;
};
