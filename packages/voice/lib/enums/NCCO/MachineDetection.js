/**
 * Enum representing machine detection behavior for the Connect NCCO action.
 * @enum {string}
 */
export const MachineDetection = Object.freeze({
  /**
     * Continue with the call if machine detection is triggered.
     */
  CONTINUE: 'continue',
  /**
     * Hang up the call if machine detection is triggered.
     */
  HANGUP: 'hangup'
});
