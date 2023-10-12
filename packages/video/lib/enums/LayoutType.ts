/**
 * Enum representing different layout types for live streaming broadcasts.
 */
export enum LayoutType {
  /**
   * Automatically determine the best fit layout.
   */
  BEST_FIT = 'bestFit',

  /**
   * Use a custom layout for the broadcast.
   */
  CUSTOM = 'custom',

  /**
   * Horizontal presentation layout.
   */
  HORIZONTAL_PRESENTATION = 'horizontalPresentation',

  /**
   * Picture-in-picture (PIP) layout.
   */
  PIP = 'pip',

  /**
   * Vertical presentation layout.
   */
  VERTICAL_PRESENTATION = 'verticalPresentation',
}
