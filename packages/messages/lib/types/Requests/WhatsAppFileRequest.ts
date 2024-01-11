/**
 * Represents a request for sending a file message via the WhatsApp channel.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppFileRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'file' for a file message.
   */
  message_type: 'file';

  /**
   * The file content of the message, including the URL of the file and an optional caption.
   */
  file: {
    /**
     * The URL of the file to be sent.
     */
    url: string;

    /**
     * An optional caption for the file.
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
