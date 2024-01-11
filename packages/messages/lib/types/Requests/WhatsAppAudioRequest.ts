/**
 * Represents a request for sending an audio message via the WhatsApp channel.
 *
 * @group WhatsApp
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WhatsAppAudioRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'audio' for an audio message.
   */
  message_type: 'audio';

  /**
   * The audio content of the message, including its URL.
   */
  audio: {
    /**
     * The URL of the audio.
     */
    url: string;
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
