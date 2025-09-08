import { ViberService } from '../Channels/index.js';

/**
 * Represents a request for sending a video message via the Viber Service channel.
 *
 * @group Viber
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ViberVideoRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'video' for a video message.
   */
  message_type: 'video';

  /**
   * The video content of the message, including its URL and optional caption and thumbnail URL.
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

    /**
     * An optional URL for the video's thumbnail.
     */
    thumb_url?: string;
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
   * The channel through which the message will be sent, which is 'viber_service' for Viber Service.
   */
  channel: 'viber_service';

  /**
   * The Viber service configuration.
   */
  viber_service: ViberService;
}
