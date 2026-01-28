import { MessageClassEnum, TypeEnum } from '../enums';

/**
 * Type representing parameters for sending an SMS.
 *
 * Describes the structure of parameters that can be used when sending an SMS, including sender, recipient,
 * message content, and additional options.
 */
export type SMSParams = {
  /**
   * The sender's phone number or name.
   */
  from: string;

  /**
   * The recipient's phone number in E.164 format.
   */
  to: string;

  /**
   * The text content of the SMS message (optional).
   */
  text?: string;

  /**
   * The time-to-live (TTL) duration in milliseconds for delivery attempts (optional).
   */
  ttl?: number;

  /**
   * Indicates if a delivery receipt is requested (optional).
   */
  statusReportReq?: boolean;

  /**
   * The webhook callback URL for receiving delivery receipts (optional).
   */
  callback?: string;

  /**
   * The message class (optional).
   */
  messageClass?: MessageClassEnum;

  /**
   * The format of the message body (optional).
   */
  type?: TypeEnum;

  /**
   * The binary body of the message (optional).
   */
  body?: string;

  /**
   * The User Data Header (UDH) for binary messages (optional).
   */
  udh?: string;

  /**
   * The protocol identifier for binary messages (optional).
   */
  protocolId?: number;

  /**
   * The title of the message (optional).
   */
  title?: string;

  /**
   * The URL for WAP Push messages (optional).
   */
  url?: string;

  /**
   * The validity period of the message (optional).
   */
  validity?: string;

  /**
   * Your client reference for the message (optional).
   */
  clientRef?: string;

  /**
   * An optional string used to identify separate accounts using the SMS endpoint for billing purposes (optional).
   */
  accountRef?: string;

  /**
   * An optional entity ID for regulatory requirements (optional).
   */
  entityId?: string;

  /**
   * An optional content ID for regulatory requirements (optional).
   */
  contentId?: string;

  /**
   * Setting this parameter to true overrides, on a per-message basis, any
   * protections set up via Fraud Defender (Traffic Rules, SMS Burst
   * Protection, AIT Protection). This parameter only has any effect for
   * accounts subscribed to Fraud Defender Premium.
   */
  trustedNumber?: boolean

  /**
   * The ID of the Number Pool to use as the sender of this message. If
   * specified, a number from the pool will be used as the from number. The
   * from parameter is still required even when specifying a pool-id and will
   * be used as a fall-back if the number pool cannot be used.
   *
   * @see https://developer.vonage.com/en/numbers/number-pools-api/overview
   */
  poolId?: string;
}
