import { Country } from "./Country";

/**
 * Represents filters for querying owned numbers.
 */
export type NumbersQueryOwnedFilter = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country?: Country;

  /**
   * An Application ID.
   * Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
   */
  application_id?: string;

  /**
   * Indicates whether numbers have an associated application.
   */
  has_application?: boolean;

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
