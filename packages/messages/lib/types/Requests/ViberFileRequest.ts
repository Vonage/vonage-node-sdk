import { ViberService } from '../Channels/index.js';

/**
 * Represents a request for sending a file message via the Viber Service channel.
 *
 * @group Viber
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ViberFileRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'file' for a file message.
   */
  message_type: 'file';

  /**
   * The file content to be sent, including the URL and name.
   */
  file: {
    /**
     * The URL of the file to be sent.
     */
    url: string;

    /**
     * The name of the file.
     */
    name: string;
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
