/**
 * Enum representing the status of Silent Authentication.
 * @enum {string}
 */
export const SilentAuthStatus = Object.freeze({
  /**
     * Silent Authentication has been completed successfully.
     */
  COMPLETED: 'completed',
  /**
     * Silent Authentication has failed.
     */
  FAILED: 'failed',
  /**
     * The user has rejected Silent Authentication.
     */
  USER_REJECTED: 'user_rejected',
  /**
     * Silent Authentication has expired.
     */
  EXPIRED: 'expired',
  /**
     * An action is pending for Silent Authentication.
     */
  ACTION_PENDING: 'action_pending'
});
