/**
 * Represents the details of a single archive.
 *
 * @typedef {Object} SingleArchiveResponseBase
 * @property {number} createdAt - The timestamp when the archive was created, expressed in milliseconds since the Unix epoch.
 * @property {number} duration - The duration of the archive in seconds.
 * @property {boolean} hasAudio - Indicates whether the archive has audio.
 * @property {boolean} hasVideo - Indicates whether the archive has video.
 * @property {string} id - The unique identifier of the archive.
 * @property {string} name - The name of the archive.
 * @property {string} outputMode - The output mode of the archive.
 * @property {string} projectId - The unique identifier of the project to which the archive belongs.
 * @property {string} reason - The reason for the archive status.
 * @property {string} resolution - The resolution of the archive.
 * @property {string} sessionId - The unique identifier of the session associated with the archive.
 * @property {number} size - The size of the archive in bytes.
 * @property {string} status - The status of the archive.
 * @property {string} streamMode - The stream mode of the archive.
 * @property {string} [url] - The URL of the archive.
 * @property {Array.<string>} [streams] - An array of stream identifiers associated with the archive.
 */

/**
 * Represents an archive with transcription properties.
 *
 * @typedef {Object} SingleArchiveResponseWithTranscription
 * @property {true} hasTranscription - Post-processing will include transcription
 * @property {Object} transcriptionProperties - Additional options when transcription is enabled The primary language spoken in the archive to be transcribed, in BCP-47 format. Example: en-US, es-ES, or pt-BR. True if the transcription should have a summary.
 */

/**
 * Represents an archive without transcription properties.
 *
 * @typedef {Object} SingleArchiveResponseWithoutTranscription
 * @property {false} [hasTranscription] - Transcription is disabled on the archive
 */

/**
 * Represents an archive with a maximum bitrate.
 *
 * @typedef {Object} SingleArchiveResponseWithMaxBitrate
 * @property {number} maxBitrate - The maximum video bitrate for the archive, in bits per second.
 */

/**
 * Represents an archive with a quantization parameter.
 *
 * @typedef {Object} SingleArchiveResponseWithQuantizationParameter
 * @property {number} quantizationParameter - The quantization level for the archive quality.
 */

/**
 * Represents the details of a single archive, supporting mutually exclusive parameters.
 *
 * @typedef {Object} SingleArchiveResponse
 */

export {};
