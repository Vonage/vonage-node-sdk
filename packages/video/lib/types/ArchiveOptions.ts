import { ArchiveOutputMode, Resolution, StreamMode } from '../enums/index.js';
import { ArchiveLayout } from './ArchiveLayout.js';

/**
 * Interface representing options for creating an archive.
 */
type BaseArchiveOptions = {
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
   * Flag indicating whether or not the archive should have transcription
   */
  hasTranscription?: boolean;

  /**
   * Additional properties that control the trascription output
   * An object containing all transcription properties.
   * Only valid if `hasTranscription` is true.
   */
  transcriptionProperties?: {
    /**
     * The primary language spoken in the archive to be transcribed, in BCP-47 format, e.g. en-US, es-ES or pt-BR.
     */
    primaryLanguageCode?: string;

    /**
     * Whether or not the transcription should also provide a summary
     */
    hasSummary?: boolean;

    /**
     * True if the archive should be transcribed.
     */
    hasTranscription?: boolean;
  }
}

type ArchiveOptionsWithMaxBitrate = BaseArchiveOptions & {
  /**
 * The maximum video bitrate for the archive, in bits per second. This is mutually exclusive with quantizationParameter.
 */
  maxBitrate?: number;
}

type ArchiveOptionsWithQuantizationParameter = BaseArchiveOptions & {
  /**
   * The quantization level for the archive quality. This is mutually exclusive with maxBitrate.
   */
  quantizationParameter?: number;
}

type ArchiveWithTranscription = BaseArchiveOptions & {
  hasTranscription: true;
  transcriptionProperties: {
    primaryLanguageCode?: string;
    hasSummary?: boolean;
  };
}

type ArchiveWithoutTranscription = BaseArchiveOptions & {
  hasTranscription?: false;
  transcriptionProperties: never;
}

export type ArchiveOptions =
  | ArchiveOptionsWithMaxBitrate
  | (ArchiveOptionsWithMaxBitrate & ArchiveWithTranscription)
  | (ArchiveOptionsWithMaxBitrate & ArchiveWithoutTranscription)
  | ArchiveOptionsWithQuantizationParameter
  | (ArchiveOptionsWithQuantizationParameter & ArchiveWithTranscription)
  | (ArchiveOptionsWithQuantizationParameter & ArchiveWithoutTranscription)
  | ArchiveWithTranscription
  | ArchiveWithoutTranscription;
