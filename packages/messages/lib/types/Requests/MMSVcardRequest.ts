/**
 * Represents a request for sending a vCard message via the MMS (Multimedia Messaging Service) channel.
 *
 * @group MMS
 * @category Requests
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type MMSVcardRequest = {
  /**
   * A client-defined reference string for the message.
   */
  client_ref: string;

  /**
   * The type of the message, which is 'vcard' for a vCard message.
   */
  message_type: 'vcard';

  /**
   * The vCard content of the message, including the URL of the vCard file.
   */
  vcard: {
    /**
     * The URL of the vCard file to be sent in the message.
     */
    url: string;
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
