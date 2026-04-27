/**
 * Represents parameters for creating a verification request for sending
 * verification codes via different communication channels.
 *
 * @typedef {Object} VerificationRequestParams
 * @property {string} brand - The brand associated with the verification request.
 * @property {Array} workflow - An array of workflow configurations for sending verification codes via different channels. Each element in the array corresponds to a specific channel workflow.
 * @property {string} [code] - (Optional) The verification code to be sent.
 * @property {VerifyLocale | string} [locale] - (Optional) The locale for the verification request.
 * @property {number} [channelTimeout] - (Optional) The timeout duration for the verification channel in seconds.
 * @property {string} [clientRef] - (Optional) The client reference associated with the verification request.
 * @property {4 | 5 | 6 | 7 | 8 | 9 | 10} [codeLength] - (Optional) The length of the verification code, if not provided, defaults to 4 digits.
 * @property {boolean} [fraudCheck] - (Optional) Indicates whether fraud checking is enabled for the verification request.
 * @property {string} [templateId] - A custom template ID to use for the verification request. @remarks Only voice and sms workflows support custom templates.
 */

export {};
