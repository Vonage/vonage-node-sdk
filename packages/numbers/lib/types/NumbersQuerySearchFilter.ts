import { Country } from "./Country";

/**
 * Represents filters for searching phone numbers.
 */
export type NumbersQuerySearchFilter = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country?: Country;

  /**
   * A pattern to filter numbers.
   */
  pattern?: string;

  /**
   * The search pattern type.
   * Example: 0 for "START_WITH".
   */
  search_pattern?: number;

  /**
   * The maximum number of results to return.
   */
  size?: number;

  /**
   * The starting index for paginated results.
   */
  index?: number;
};
