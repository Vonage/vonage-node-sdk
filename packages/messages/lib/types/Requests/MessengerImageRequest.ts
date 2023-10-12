import { MessengerType } from '../Channels';

/**
 * Represents a request to send an image message via the Messenger channel.
 *
 * @group Messenger
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure request structure before it's transformed into `snake_case` for the API call.
 */
export type MessengerImageRequest = {
  /** A client reference string for tracking the message. */
  client_ref: string;
  /** The message type, which is set to 'image' for an image message. */
  message_type: 'image';
  /** The image content of the message, including the URL of the image. */
  image: {
    /** The URL of the image. */
    url: string;
  };
  /** The recipient of the message. */
  to: string;
  /** The sender of the message. */
  from: string;
  /** The channel for sending the message, which is set to 'messenger'. */
  channel: 'messenger';

  /** Additional details about the Messenger message type. */
  messenger: MessengerType;
}
