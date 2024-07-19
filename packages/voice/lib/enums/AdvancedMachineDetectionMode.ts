/**
 * Enum representing different modes for advanced machine detection in the Connect NCCO action.
 */
export enum AdvancedMachineDetectionMode {
  /**
   * Default mode, used for advanced async machine detection without beep detection.
   */
  DEFAULT = 'default',

  /**
   * Detect mode, used for advanced sync machine detection without beep detection.
   */
  DETECT = 'detect',

  /**
   * Detect beep mode, used for advanced sync machine detection with beep detection.
   */
  DETECTBEEP = 'detect_beep',
}
