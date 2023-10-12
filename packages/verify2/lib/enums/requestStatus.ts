/**
 * Enum representing the status of a verification request.
 */
export enum RequestStatus {
  /**
   * The verification request has been completed successfully.
   */
  COMPLETED = 'completed',

  /**
   * The verification request has failed.
   */
  FAILED = 'failed',

  /**
   * The verification request has expired.
   */
  EXPIRED = 'expired',
}
