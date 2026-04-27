/**
 * Interface representing options for creating an archive.
 *
 * @typedef {Object} BaseArchiveOptions
 * @property {boolean} [hasAudio] - Flag indicating whether audio should be included in the archive.
 * @property {boolean} [hasVideo] - Flag indicating whether video should be included in the archive.
 * @property {ArchiveLayout} [layout] - Layout configuration for the archive.
 * @property {string} [name] - Name of the archive.
 * @property {ArchiveOutputMode} [outputMode] - Output mode for the archive.
 * @property {Resolution} [resolution] - Resolution for the archive.
 * @property {StreamMode} [streamMode] - Stream mode for the archive.
 * @property {boolean} [hasTranscription] - Flag indicating whether or not the archive should have transcription
 */

/**
 * @typedef {Object} ArchiveOptionsWithMaxBitrate
 * @property {number} [maxBitrate] - The maximum video bitrate for the archive, in bits per second. This is mutually exclusive with quantizationParameter.
 */

/**
 * @typedef {Object} ArchiveOptionsWithQuantizationParameter
 * @property {number} [quantizationParameter] - The quantization level for the archive quality. This is mutually exclusive with maxBitrate.
 */

/**
 * @typedef {Object} ArchiveWithTranscription
 * @property {true} hasTranscription
 * @property {Object} transcriptionProperties
 */

/**
 * @typedef {Object} ArchiveWithoutTranscription
 * @property {false} [hasTranscription]
 * @property {never} transcriptionProperties
 */

/**
 * @typedef {Object} ArchiveOptions
 */

export {};
