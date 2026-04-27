/**
 * Represents a Talk action within a Nexmo Call Control Object (NCCO). This action
 * allows text-to-speech (TTS) to be spoken during a call.
 *
 * @typedef {Object} TalkAction
 * @property {NCCOActions.TALK} action - The action type, which is always set to 'talk'.
 * @property {string} text - The text that should be spoken using text-to-speech (TTS) during the call.
 * @property {boolean} [bargeIn] - (Optional) If set to `true`, allows barge-in, which means the caller can interrupt the TTS speech by speaking. Default is `false`.
 * @property {number} [loop] - (Optional) The number of times the TTS speech should be looped. If not specified, the TTS speech will not loop.
 * @property {string} [level] - (Optional) The voice level at which the TTS speech should be spoken. This can be a string representation of the level.
 * @property {TTSLanguages | string} [language] - (Optional) The language in which the TTS speech should be spoken. Use one of the supported TTS language codes.
 * @property {string} [style] - (Optional) The style or type of voice to use for TTS speech. This can be a string representing the voice style.
 * @property {boolean} [premium] - (Optional) If set to `true`, indicates that premium TTS should be used for the speech. Default is `false`.
 */

export {};
