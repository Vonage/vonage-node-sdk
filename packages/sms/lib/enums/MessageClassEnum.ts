/**
 * Enumeration representing the possible message classes.
 *
 * Defines different message classes that can be associated with SMS messages.
 *
 * @enum {number}
 * @readonly
 */
export enum MessageClassEnum {
  /**
   * Class 0: Flash SMS.
   */
  NUMBER_0 = 0,

  /**
   * Class 1: Immediate display (user should be able to read the message instantly).
   */
  NUMBER_1 = 1,

  /**
   * Class 2: Mobile equipment-to-mobile equipment (ME-to-ME) communication.
   */
  NUMBER_2 = 2,

  /**
   * Class 3: SIM card-based storage.
   */
  NUMBER_3 = 3,
}
