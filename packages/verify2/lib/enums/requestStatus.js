/**
 * Enum representing the status of a verification request.
 * @enum {string}
 */
export const RequestStatus = Object.freeze({
  /**
     * The verification request has been completed successfully.
     */
  COMPLETED: 'completed',
  /**
     * The verification request has failed.
     */
  FAILED: 'failed',
  /**
     * The verification request has expired.
     */
  EXPIRED: 'expired'
});
