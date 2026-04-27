/**
 * Represents a workflow for sending a verification code via SMS.
 *
 * @typedef {Object} SMSWorkflow
 * @property {Channels.SMS} channel - The communication channel for sending the verification code.
 * @property {string} to - The recipient's phone number where the verification code will be sent, in the E.164 format.
 * @property {string} [from] - An optional sender number, in the E.164 format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. @remarks If no from number is given, the request will default to the brand.
 * @property {string} [entityId] - Optional PEID required for SMS delivery using Indian Carriers
 * @property {string} [contentId] - Optional value corresponding to a TemplateID for SMS delivery using Indian Carriers
 * @property {string} [appHash] - (Optional) An application-specific hash value for the SMS workflow.
 */

export {};
