/**
 * Enum representing the status of an event in the verification process.
 */
export enum EventStatus {
  /**
   * The event has been completed successfully.
   */
  COMPLETED = 'completed',

  /**
   * The event has failed.
   */
  FAILED = 'failed',

  /**
   * The user has rejected the event.
   */
  USER_REJECTED = 'user_rejected',

  /**
   * The event has been rejected.
   */
  REJECTED = 'rejected',
}
