/**
 * Represents information about a phone number.
 */
export type PhoneInfo = {
  /**
   * The phone number.
   */
  phone: string;

  /**
   * The name of the network carrier (optional).
   * Included if insights included 'fraud_score'.
   */
  carrier?: string;

  /**
   * Type of phone (optional). Examples include Mobile, Landline, VOIP, PrePaid, Personal, Toll-Free.
   * Included if insights included 'fraud_score'.
   */
  type?: string;
};
