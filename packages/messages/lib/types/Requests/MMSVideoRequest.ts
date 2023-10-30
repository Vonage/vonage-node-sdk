/**
 * Represents a request for sending a video message via the MMS (Multimedia Messaging Service) channel.
 *
 * @group MMS
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type MMSVideoRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'video' for a video message.
   */
  message_type: 'video';

  /**
   * The video content of the message, including the URL of the video file and an optional caption.
   */
  video: {
    /**
     * The URL of the video file to be sent in the message.
     */
    url: string;

    /**
     * An optional caption for the video.
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
