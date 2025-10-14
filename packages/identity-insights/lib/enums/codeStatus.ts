/**
 * Enum representing the possible status values for an insight.
 */
export enum Status {

  /**
   * The country or mobile network is not supported by available suppliers.
   */
  NO_COVERAGE = 'no_coverage',

  /**
   * The purpose used is not valid or allowed for this Insight.
   */
  INVALID_PURPOSE = 'invalid_purpose',

  /**
   * The request could not be authorized for the combination of application, supplier, and phone number.
   */
  UNAUTHORIZED = 'unauthorized',

  /**
   * An internal error occurred while processing the request.
   */
  INTERNAL_ERROR = 'internal_error',

  /**
   * The supplier returned an error while processing the request.
   */
  SUPPLIER_ERROR = 'supplier_error',

  /**
   * The phone number could not be found for this Insight.
   */
  NOT_FOUND = 'not_found',

  /**
   * The phone number format is not valid for assignment by carriers to users.
   */
  INVALID_NUMBER_FORMAT = 'invalid_number_format',

  /**
   * Some response attributes were omitted because they are not applicable or were not available.
   */
  PARTIAL_SUCCESS = 'partial_success',

  /**
   * All Insight attributes are available and included in the response.
   */
  OK = 'ok',
}
