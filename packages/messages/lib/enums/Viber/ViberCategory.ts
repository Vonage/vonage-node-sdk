/**
 * Enum representing message categories for Viber messages.
 *
 * These categories are used to classify the type and purpose of Viber messages.
 *
 * @enum {string}
 * @readonly
 *
 * @group Viber
 */
export enum ViberCategory {
  /**
   * Represents the transaction message category.
   */
  TRANSACTION = 'transaction',

  /**
   * Represents the promotion message category.
   */
  PROMOTION = 'promotion',
}
