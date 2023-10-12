/**
 * Represents a request for sending a video message via the WhatsApp channel.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppVideoRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'video' for a video message.
   */
  message_type: 'video';

  /**
   * The video content of the message, including the URL and an optional caption.
   */
  video: {
    /**
     * The URL of the video.
     */
    url: string;

    /**
     * An optional caption for the video.
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
}
