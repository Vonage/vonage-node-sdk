import { ArchiveOutputMode, Resolution, StreamMode } from '../enums';
import { ArchiveLayout } from './ArchiveLayout';

/**
 * Interface representing options for creating an archive.
 */
export type ArchiveOptions = {
  /**
   * Flag indicating whether audio should be included in the archive.
   */
  hasAudio?: boolean;

  /**
   * Flag indicating whether video should be included in the archive.
   */
  hasVideo?: boolean;

  /**
   * Layout configuration for the archive.
   */
  layout?: ArchiveLayout;

  /**
   * Name of the archive.
   */
  name?: string;

  /**
   * Output mode for the archive.
   */
  outputMode?: ArchiveOutputMode;

  /**
   * Resolution for the archive.
   */
  resolution?: Resolution;

  /**
   * Stream mode for the archive.
   */
  streamMode?: StreamMode;

  /**
   * The maximum video bitrate for the archive, in bits per second
   */
  maxBitrate?: number;
}
