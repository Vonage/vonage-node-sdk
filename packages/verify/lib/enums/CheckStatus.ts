/**
 * Enum representing the status of a verification check.
 */
export enum CheckStatus {
  /**
   * The verification check was successful.
   */
  SUCCESS = '0',

  /**
   * The verification request was throttled.
   */
  THROTTLED = '1',

  /**
   * A required parameter was missing in the verification request.
   */
  MISSING_REQUIRED_PARAM = '2',

  /**
   * An invalid parameter was provided in the verification request.
   */
  INVALID_PARAM = '3',

  /**
   * Invalid credentials were used in the verification request.
   */
  INVALID_CREDENTIALS = '4',

  /**
   * An internal error occurred during the verification process.
   */
  INTERNAL_ERROR = '5',

  /**
   * Failed to process the verification request.
   */
  FAILED_TO_PROCESS = '6',

  /**
   * The API key used in the verification request is barred.
   */
  BARRED_API_KEY = '8',

  /**
   * Partner quota for verifications exceeded.
   */
  PARTNER_QUOTA_EXCEEDED = '9',

  /**
   * Concurrent verifications not allowed.
   */
  CONCURRENT_VERIFICATIONS = '10',

  /**
   * The network is not supported for verification.
   */
  UNSUPPORTED_NETWORK = '15',

  /**
   * Code mismatch in the verification request.
   */
  CODE_MISMATCH = '16',

  /**
   * Invalid verification code provided.
   */
  INVALID_CODE = '17',

  /**
   * Delivery of the verification failed.
   */
  DELIVERY_FAILED = '19',

  /**
   * PIN not supported for verification.
   */
  PIN_NOT_SUPPORTED = '20',

  /**
   * Destination not permitted for verification.
   */
  NON_PERMITTED_DESTINATION = '29',
}
