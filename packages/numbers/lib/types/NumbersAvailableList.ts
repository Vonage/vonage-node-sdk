import { NumbersAvailableNumber } from './NumbersAvailableNumber';

/**
 * Represents a list of available numbers.
 */
export type NumbersAvailableList = {
  /**
   * The total count of available numbers.
   */
  count?: number;

  /**
   * An array of available numbers and their details.
   */
  numbers?: NumbersAvailableNumber[];
}
