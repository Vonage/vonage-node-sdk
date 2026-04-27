/**
 * Enum representing the status of a call, including its various stages and outcomes.
 * @enum {string}
 */
export const CallStatus = Object.freeze({
  /**
     * The call has started.
     */
  STARTED: 'started',
  /**
     * The call is ringing.
     */
  RINGING: 'ringing',
  /**
     * The call has been answered.
     */
  ANSWERED: 'answered',
  /**
     * The call has been detected as a machine.
     */
  MACHINE: 'machine',
  /**
     * The call has been completed.
     */
  COMPLETED: 'completed',
  /**
     * The call is busy.
     */
  BUSY: 'busy',
  /**
     * The call has been cancelled.
     */
  CANCELLED: 'cancelled',
  /**
     * The call has failed.
     */
  FAILED: 'failed',
  /**
     * The call has been rejected.
     */
  REJECTED: 'rejected',
  /**
     * The call has timed out.
     */
  TIMEOUT: 'timeout',
  /**
     * The call went unanswered.
     */
  UNANSWERED: 'unanswered'
});
