/**
 * Represents a workflow for sending a verification code via SMS.
 *
 * @typedef {Object} RCSWorkflow
 * @property {Channels.RCS} channel - The communication channel for sending the verification code.
 * @property {string} to - The recipient's phone number where the verification code will be sent, in the E.164 format.
 * @property {string} from - An sender identifier in alphanumeric format.
 * @property {boolean} [reuseCode] - Use the same PIN code across multiple channels within a workflow
 */

export {};
