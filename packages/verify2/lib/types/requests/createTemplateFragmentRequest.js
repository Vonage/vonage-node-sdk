/**
 * Represents the request body for creating a template fragment.
 *
 * @typedef {Object} CreateTemplateFragmentRequest
 * @property {'sms' | 'voice'} channel - The communication channel for the fragment (e.g., sms, voice, email). @example "sms"
 * @property {string} locale - Locale in IETF BCP 47 format. @example "en-us"
 * @property {string} text - Text content of the template fragment. @example "Text content of the template. May contain 4 reserved variables: `${code}`, `${brand}`, `${time-limit}` and `${time-limit-unit}`"
 */

export {};
