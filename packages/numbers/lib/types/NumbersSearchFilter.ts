import { LineType, Feature, SearchPattern } from '../enums/index.js';
import { Country } from './Country.js';

/**
 * Represents filters for searching phone numbers.
 */
export type NumbersSearchFilter = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country: Country;

  /**
   * The type of the phone number.
   */
  type?: LineType;

  /**
   * A pattern to filter numbers.
   */
  pattern?: string;

  /**
   * The search pattern type.
   * Example: 0 for "START_WITH".
   */
  searchPattern?: SearchPattern;

  /**
   * The capabilities or features of the number.
   */
  features?: Feature[];

  /**
   * The maximum number of results to return.
   */
  size?: number;

  /**
   * The starting index for paginated results.
   */
  index?: number;
};
