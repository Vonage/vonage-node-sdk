import { MessageClassEnum, TypeEnum } from '../../enums';

/**
 * Interface representing the request body for sending an SMS.
 *
 * Describes the structure of the request body used when sending an SMS message.
 */
export type SMSRequestBody = {
  /**
   * The recipient's phone number in E.164 format.
   */
  to: string;

  /**
   * The Alphanumeric senderID (if supported for the destination) or virtual number (specified in E.164 format) that
   * the SMS is being sent from.
   */
  from: string;

  /**
   * The body of the message being sent (optional).
   */
  text?: string;

  /**
   * Hex-encoded binary data (optional).
   */
  body?: string;

  /**
   * The format of the message body (optional).
   */
  'type?': TypeEnum;

  /**
   * The duration in milliseconds for delivery attempts (optional).
   */
  'ttl?': number;

  /**
   * Your own reference for the message (optional).
   */
  'client_ref?': string;

  /**
   * The webhook endpoint for the delivery receipt (optional).
   */
  'callback?': string;

  /**
   * The Data Coding Scheme value of the message (optional).
   */
  'message_class?': number;

  /**
   * Custom Hex-encoded User Data Header (optional).
   */
  'udh?': string;

  /**
   * The value of the protocol identifier to use (optional).
   */
  'protocol-id'?: number;

  /**
   * Boolean indicating if a Delivery Receipt is requested (optional).
   */
  'status-report-req'?: boolean;

  /**
   * The Data Coding Scheme value of the message (optional).
   */
  'message-class'?: MessageClassEnum;

  /**
   * Your own reference for the message (optional).
   */
  'client-ref'?: string;

  /**
   * A string parameter for regulatory requirements (optional).
   */
  'entity-id'?: string;

  /**
   * A string parameter for regulatory requirements (optional).
   */
  'content-id'?: string;
};
