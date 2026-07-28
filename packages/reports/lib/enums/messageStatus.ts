/**
 * Delivery status of a message sent via the Messages API.
 */
export enum MessageStatus {
  /**
   * The message was delivered to the recipient's device.
   */
  DELIVERED = 'delivered',

  /**
   * The message was read by the recipient.
   */
  READ = 'read',

  /**
   * The message was rejected by the provider or network.
   */
  REJECTED = 'rejected',

  /**
   * The message has been submitted to the network but delivery is not yet confirmed.
   */
  SUBMITTED = 'submitted',

  /**
   * The message could not be delivered.
   */
  UNDELIVERABLE = 'undeliverable',
};
