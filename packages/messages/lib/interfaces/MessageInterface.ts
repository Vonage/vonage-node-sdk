/**
 * Represents a message interface for defining common message properties.
 *
 * This interface includes essential properties shared by various message types,
 * such as the recipient's phone number, sender's ID, and an optional client reference.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageInterface {
  /**
   * The phone number of the message recipient in E.164 format.
   */
  to: string;

  /**
   * The ID of the message sender.
   */
  from: string;

  /**
   * An optional client reference of up to 100 characters, which can be included in every message status.
   */
  clientRef?: string;
}
