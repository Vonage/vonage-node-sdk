/**
 * Represents a message interface for defining common message properties.
 * This interface includes essential properties shared by various message types,
 * such as the recipient's phone number, sender's ID, and an optional client reference.
 *
 * @typedef {Object} MessageInterface
 * @property {string} to - The phone number of the message recipient in E.164 format.
 * @property {string} from - The ID of the message sender.
 * @property {string} [clientRef] - An optional client reference of up to 100 characters, which can be included in every message status.
 */

export {};
