import { NumbersOwnedNumber } from "./NumbersOwnedNumber";

/**
 * Represents a list of owned numbers.
 */
export type NumbersOwnedList = {
  /**
   * The total count of owned numbers.
   */
  count?: number;

  /**
   * An array of owned numbers and their details.
   */
  numbers?: NumbersOwnedNumber[];
};
