/**
 * Represents the details of a single archive.
 */
type SingleArchiveResponseBase = {
  /**
   * The timestamp when the archive was created, expressed in milliseconds since the Unix epoch.
   */
  createdAt: number;

  /**
   * The duration of the archive in seconds.
   */
  duration: number;

  /**
   * Indicates whether the archive has audio.
   */
  hasAudio: boolean;

  /**
   * Indicates whether the archive has video.
   */
  hasVideo: boolean;

  /**
   * The unique identifier of the archive.
   */
  id: string;

  /**
   * The name of the archive.
   */
  name: string;

  /**
   * The output mode of the archive.
   */
  outputMode: string;

  /**
   * The unique identifier of the project to which the archive belongs.
   */
  projectId: string;

  /**
   * The reason for the archive status.
   */
  reason: string;

  /**
   * The resolution of the archive.
   */
  resolution: string;

  /**
   * The unique identifier of the session associated with the archive.
   */
  sessionId: string;

  /**
   * The size of the archive in bytes.
   */
  size: number;

  /**
   * The status of the archive.
   */
  status: string;

  /**
   * The stream mode of the archive.
   */
  streamMode: string;

  /**
   * The URL of the archive.
   */
  url?: string;

  /**
   * An array of stream identifiers associated with the archive.
   */
  streams?: string[];
};

/**
 * Represents an archive with transcription properties.
 */
type SingleArchiveResponseWithTranscription = SingleArchiveResponseBase & {
  /**
   * Post-processing will include transcription
   */
  hasTranscription: true;

  /**
   * Additional options when transcription is enabled
   */
  transcriptionProperties: {
    /**
     * The primary language spoken in the archive to be transcribed, in BCP-47 format.
     * Example: en-US, es-ES, or pt-BR.
     */
    primaryLanguageCode?: string;

    /**
     * True if the transcription should have a summary.
     */
    hasSummary?: boolean;
  };
};

/**
 * Represents an archive without transcription properties.
 */
type SingleArchiveResponseWithoutTranscription = SingleArchiveResponseBase & {
  /**
   * Transcription is disabled on the archive
   */
  hasTranscription?: false;

  /**
   * Additional transcription options cannot be passed when transcription is disabled
   */
  transcriptionProperties?: never;
};

/**
 * Represents an archive with a maximum bitrate.
 */
type SingleArchiveResponseWithMaxBitrate = SingleArchiveResponseBase & {
  /**
   * The maximum video bitrate for the archive, in bits per second.
   */
  maxBitrate: number;

  /**
   * Quantization cannot be enabled when using maxBitrate
   */
  quantizationParameter?: never;
};

/**
 * Represents an archive with a quantization parameter.
 */
type SingleArchiveResponseWithQuantizationParameter = SingleArchiveResponseBase & {
  /**
   * The quantization level for the archive quality.
   */
  quantizationParameter: number;

  /**
   * MaxBitrate cannot be used when using quantizationParameter
   */
  maxBitrate?: never;
};

/**
 * Represents the details of a single archive, supporting mutually exclusive parameters.
 */
export type SingleArchiveResponse =
  | (SingleArchiveResponseWithMaxBitrate & SingleArchiveResponseWithoutTranscription)
  | (SingleArchiveResponseWithMaxBitrate & SingleArchiveResponseWithTranscription)
  | (SingleArchiveResponseWithQuantizationParameter & SingleArchiveResponseWithoutTranscription)
  | (SingleArchiveResponseWithQuantizationParameter & SingleArchiveResponseWithTranscription)
  | SingleArchiveResponseWithTranscription;
