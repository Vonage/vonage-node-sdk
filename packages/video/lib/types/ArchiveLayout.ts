import { LayoutType } from '../enums/index.js';

/**
 * Represents the layout configuration for an archive.
 */
export type ArchiveLayout = {
  /**
   * The type of layout to be used for the archive.
   */
  type: LayoutType;

  /**
   * Optional: The stylesheet used for custom layout (only applicable if type is 'custom').
   */
  stylesheet?: string;

  /**
   * Optional: The screenshare layout type to use when there is a screen-sharing
   * stream in the archive (only applicable if type is 'bestFit' and
   * screenshareType is set).
   */
  screenshareType?: string;
}
