/**
 * Represents settings for Dual-Tone Multi-Frequency (DTMF) recognition in a Nexmo Call Control Object (NCCO) action.
 * DTMF settings define how the system handles DTMF tones during a call.
 */
export type DTMFSettings = {
  /**
   * The duration (in seconds) to wait for the user to input DTMF digits.
   * If no digits are entered within this timeout, the DTMF recognition ends.
   */
  timeOut?: number;

  /**
   * The maximum number of DTMF digits to collect.
   * Once the maximum digits are collected, the DTMF recognition ends.
   */
  maxDigits?: number;

  /**
   * When set to `true`, the DTMF recognition ends and submits the collected digits when a '#' key is pressed.
   * If set to `false`, the DTMF recognition ends when the maximum digits are collected or the timeout occurs.
   */
  submitOnHash?: boolean;
};
