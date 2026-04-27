/**
 * Represents an outbound call with an answer URL, including common call properties and the answer URL information.
 *
 * @typedef {Object} CallWithAnswerURL
 * @property {Array.<string>} answerUrl - The URL(s) to which call events should be sent when the call is answered.
 * @property {HttpMethod} [answerMethod] - The HTTP method used to send events to the answer URL(s), typically "GET" or "POST."
 * @property {string} [dtmfAnswer] - Provide DTMF digits to send when the call is answerMethod
 */

export {};
