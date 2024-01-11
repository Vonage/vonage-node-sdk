import {
  MachineDetectionBehavior,
  AdvancedMachineDetectionMode,
} from '../enums';

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
};
