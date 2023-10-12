import { ViberService } from '../Channels';

/**
 * Represents a request for sending a text message via the Viber Service channel.
 *
 * @group Viber
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ViberTextRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'text' for a text message.
   */
  message_type: 'text';

  /**
   * The text content of the message.
   */
  text: string;

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
