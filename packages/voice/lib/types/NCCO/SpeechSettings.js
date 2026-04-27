/**
 * Represents settings for speech recognition within a Nexmo Call Control Object (NCCO).
 *
 * @typedef {Object} SpeechSettings
 * @property {string} [uuid] - (Optional) A unique identifier (UUID) for the speech recognition session. If not provided, Nexmo generates one.
 * @property {boolean} [endOnSilence] - (Optional) If set to `true`, speech recognition will end when there is a period of silence. Default is `false`.
 * @property {string} [language] - (Optional) The language in which speech recognition should be performed. This should be a language code or identifier.
 * @property {Array.<string>} [context] - (Optional) An array of context strings that provide additional information for speech recognition. Contexts can help improve recognition accuracy.
 * @property {number} [startTimeout] - (Optional) The maximum time (in seconds) to wait for the start of speech recognition after the audio begins.
 * @property {number} [maxDuration] - (Optional) The maximum duration (in seconds) for speech recognition in a single session. If recognition exceeds this duration, it will be terminated.
 * @property {boolean} [saveAudio] - (Optional) If set to `true`, the audio of the recognized speech will be saved. Default is `false`.
 */

export {};
