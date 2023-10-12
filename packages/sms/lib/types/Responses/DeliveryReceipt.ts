/**
 * Interface representing a delivery receipt for an SMS message.
 *
 * Describes the structure of a delivery receipt containing information about the message's delivery status.
 */
export type DeliveryReceipt = {
  /**
   * The recipient's phone number in E.164 format (optional).
   */
  msisdn?: string;

  /**
   * The SenderID set in the 'from' field of the request (optional).
   */
  to?: string;

  /**
   * The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier (optional).
   */
  networkCode?: string;

  /**
   * The Vonage ID for this message (optional).
   */
  messageId?: string;

  /**
   * The cost of the message (optional).
   */
  price?: string;

  /**
   * A code explaining the message's delivery status (optional).
   */
  status?: string;

  /**
   * When the Delivery Receipt was received from the carrier in YYMMDDHHMM format (optional).
   */
  scts?: string;

  /**
   * The status of the request (optional).
   */
  errCode?: string;

  /**
   * The API key that sent the SMS (optional).
   */
  apiKey?: string;

  /**
   * Your client reference for the message (optional).
   */
  clientRef?: string;

  /**
   * The time when Vonage started to push this Delivery Receipt to your webhook endpoint (optional).
   */
  messageTimestamp?: string;

  /**
   * A Unix timestamp representation of 'messageTimestamp' (optional).
   */
  timestamp?: string;

  /**
   * A random string forming part of the signed set of parameters for validation (optional).
   */
  nonce?: string;

  /**
   * The hash of the request parameters, a timestamp, and the signature secret (optional).
   */
  sig?: string;
}
