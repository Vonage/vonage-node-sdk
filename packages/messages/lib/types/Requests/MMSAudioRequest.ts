/**
 * Represents a request for sending an audio message via the MMS (Multimedia Messaging Service) channel.
 *
 * @group MMS
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type MMSAudioRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'audio' for an audio message.
   */
  message_type: 'audio';

  /**
   * The audio content of the message, including the URL of the audio and an optional caption.
   */
  audio: {
    /**
     * The URL of the audio file to be sent in the message.
     */
    url: string;

    /**
     * An optional caption or description for the audio message.
     */
    caption?: string;
  };

  /**
   * The recipient's phone number or identifier.
   */
  to: string;

  /**
   * The sender's phone number or identifier.
   */
  from: string;

  /**
   * The channel through which the message will be sent, which is 'mms' for MMS.
   */
  channel: 'mms';
}
