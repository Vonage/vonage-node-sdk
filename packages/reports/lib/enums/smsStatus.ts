/**
 * Delivery status of an SMS message.
 */
export enum SMSStatus {
  /**
   * The message was successfully delivered to the handset.
   */
  DELIVERED = 'delivered',

  /**
   * The message expired before it could be delivered.
   */
  EXPIRED = 'expired',

  /**
   * The message was accepted by the carrier for delivery.
   */
  ACCEPTED = 'accepted',

  /**
   * The message was deleted before delivery.
   */
  DELETED = 'deleted',

  /**
   * The delivery status is unknown.
   */
  UNKNOWN = 'unknown',

  /**
   * The message was submitted to the network.
   */
  SUBMITTED = 'submitted',

  /**
   * The message failed to be delivered.
   */
  FAILED = 'failed',

  /**
   * The message was rejected by the network or carrier.
   */
  REJECTED = 'rejected',

  /**
   * The message is buffered in the network pending delivery.
   */
  BUFFERED = 'buffered',
}
