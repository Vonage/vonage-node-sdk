/**
 * Represents the response when retrieving a template fragment.
 *
 * @typedef {Object} TemplateFragmentResponse
 * @property {string} template_fragment_id - Unique identifier for the template fragment. @example "c70f446e-997a-4313-a081-60a02a31dc19"
 * @property {'sms' | 'voice'} channel - The communication channel for the fragment (e.g., sms, voice, email). @example "sms"
 * @property {string} locale - Locale in IETF BCP 47 format. @example "en-us"
 * @property {string} text - Text content of the template fragment. @example "Text content of the template. May contain 4 reserved variables: `${code}`, `${brand}`, `${time-limit}` and `${time-limit-unit}`"
 * @property {string} date_updated - The date when the template fragment was last updated, in ISO 8601 format. @example "2023-08-30T15:20:15.17865735Z"
 * @property {string} date_created - The date when the template fragment was created, in ISO 8601 format. @example "2021-08-30T20:12:15.17865735Z"
 * @property {Object} _links - HAL format links related to the template fragment. A link to the template fragment itself. A link to the parent template this fragment belongs to.
 */

export {};
