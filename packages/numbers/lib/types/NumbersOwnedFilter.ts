import { SearchPattern } from '../enums/index.js';
import { Country } from './Country.js';

/**
 * Represents filters for searching owned numbers.
 */
export type NumbersOwnedFilter = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country?: Country;

  /**
   * An Application ID.
   * Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
   */
  applicationId?: string;

  /**
   * Indicates whether numbers have an associated application.
   */
  hasApplication?: boolean;

  /**
   * A pattern to filter numbers.
   */
  pattern?: string;

  /**
   * The search pattern type.
   * Example: SearchPattern.START_WITH.
   */
  searchPattern?: SearchPattern;

  /**
   * The maximum number of results to return.
   */
  size?: number;

  /**
   * The starting index for paginated results.
   */
  index?: number;
};
