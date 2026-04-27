/**
 * Enum representing commands for controlling Verify requests.
 * @enum {string}
 */
export const Command = Object.freeze({
  /**
     * Command to request cancellation of the verification process.
     */
  CANCEL: 'cancel',
  /**
     * Command to trigger the next verification event (if any).
     */
  TRIGGER_NEXT_EVENT: 'trigger_next_event'
});
