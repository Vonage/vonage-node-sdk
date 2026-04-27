/**
 * Represents a response from the Experience Composer.
 *
 * @typedef {Object} ExperienceComposerResponse
 * @property {string} id - The unique ID of the response.
 * @property {string} sessionId - The session ID associated with the response.
 * @property {string} applicationId - The application ID associated with the response.
 * @property {number} createdAt - The timestamp when the response was created (milliseconds since the Unix epoch).
 * @property {number} updatedAt - The timestamp when the response was last updated (milliseconds since the Unix epoch).
 * @property {string} url - The URL associated with the response.
 * @property {ExperienceComposerResolution} resolution - The resolution used by the Experience Composer.
 * @property {'starting' | 'started' | 'stopped' | 'failed'} status - The status of the response, which can be one of: "starting", "started", "stopped", "failed".
 * @property {string} streamId - The stream ID associated with the response.
 * @property {string} [reason] - An optional reason for the status, if available.
 */

export {};
