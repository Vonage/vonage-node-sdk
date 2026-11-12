import {
  MachineDetectionBehavior,
  AdvancedMachineDetectionMode,
} from '../enums/index.js';

/**
 * Represents advanced settings for machine detection during a call, including
 * behavior, mode, and optional beep timeout.
 */
export type AdvancedMachineDetection = {
  /**
   * The behavior to follow when machine detection occurs.
   */
  behavior: MachineDetectionBehavior;

  /**
   * The mode of advanced machine detection.
   */
  mode: AdvancedMachineDetectionMode;

  /**
   * (Optional) The timeout duration (in seconds) for detecting a beep during
   * machine detection.
   */
  beepTimeout?: number;

  /**
   * (Optional) Enables call screener detection and navigation. With this flag
   * set, additional events will be sent, such as "promt_end" and
   * "prompt_end_timeout", that allows the application to interact with the
   * recipient's virtual call screener assistant.
   */
  callScreener?: boolean;
};
