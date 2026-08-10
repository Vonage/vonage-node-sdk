/**
 * Represents the recipient details for an email message
 *
 * @group Email
 * @category Parameters
 */
export type EmailRecipient = {
  /**
   * The name of the recipient
   */
  name: string;

  /**
   * The email address of the recipient
   */
  address: string;
}
