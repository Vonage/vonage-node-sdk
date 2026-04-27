/**
 * @typedef {Object} SMSWorkflowRequest
 * @property {string} [app_hash]
 * @property {string} [content_id]
 * @property {string} [entity_id]
 */

/**
 * @typedef {Object} SilentAuthWorkflowRequest
 * @property {string} redirect_url
 */

/**
 * Represents a verification request for sending verification codes via
 * different communication channels.
 *
 * @typedef {Object} VerificationRequest
 * @property {string} brand - The brand associated with the verification request.
 * @property {Array} workflow - An array of workflow configurations for sending verification codes via different channels. Each element in the array corresponds to a specific channel workflow.
 * @property {string} [code] - (Optional) The verification code to be sent.
 * @property {VerifyLocale | string} [locale] - (Optional) The locale for the verification request.
 * @property {number} [channel_timeout] - (Optional) The timeout duration for the verification channel in seconds.
 * @property {string} [client_ref] - (Optional) The client reference associated with the verification request.
 * @property {4 | 5 | 6 | 7 | 8 | 9 | 10} [code_length] - (Optional) The length of the verification code, if not provided, defaults to 4 digits.
 * @property {boolean} [fraud_check] - (Optional) Indicates whether fraud checking is enabled for the verification request.
 */

export {};
