/**
 * Enum representing the status of a verification request workflow step.
 */
export enum RequestWorkflowStatus {
  /**
   * The workflow step is unused.
   */
  UNUSED = 'unused',

  /**
   * The workflow step has been completed successfully.
   */
  COMPLETED = 'completed',

  /**
   * The workflow step has failed.
   */
  FAILED = 'failed',

  /**
   * The workflow step has expired.
   */
  EXPIRED = 'expired',

  /**
   * The user has rejected the workflow step.
   */
  USER_REJECTED = 'user_rejected',
}
