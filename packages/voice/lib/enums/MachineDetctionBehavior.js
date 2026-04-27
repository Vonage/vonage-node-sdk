/**
 * Enum representing the behavior of machine detection in a call.
 * @enum {string}
 */
export const MachineDetectionBehavior = Object.freeze({
  /**
     * Continue the call even if a machine is detected.
     */
  CONTINUE: 'continue',
  /**
     * Hang up the call if a machine is detected.
     */
  HANGUP: 'hangup'
});
