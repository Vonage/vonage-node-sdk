/**
 * Enum representing the status codes for Verify operations.
 */
export enum VerifyStatus {
  /**
   * Success: Your user entered a correct verification code.
   */
  SUCCESS = '0',

  /**
   * Throttled: You have exceeded the rate limit for Verify requests.
   */
  THROTTLED = '1',

  /**
   * Missing Required Parameter: A required parameter is missing in the request.
   */
  MISSING_REQUIRED_PARAM = '2',

  /**
   * Invalid Parameter: An invalid parameter was provided in the request.
   */
  INVALID_PARAM = '3',

  /**
   * Invalid Credentials: The provided API credentials are invalid.
   */
  INVALID_CREDENTIALS = '4',

  /**
   * Internal Error: An internal error occurred during processing.
   */
  INTERNAL_ERROR = '5',

  /**
   * Failed to Process: The request failed to process.
   */
  FAILED_TO_PROCESS = '6',

  /**
   * Barred API Key: The API key used in the request is barred.
   */
  BARRED_API_KEY = '8',

  /**
   * Partner Quota Exceeded: The partner's quota for Verify requests has
   * been exceeded.
   */
  PARTNER_QUOTA_EXCEEDED = '9',

  /**
   * Concurrent Verifications: Multiple verifications are being processed
   * concurrently.
   */
  CONCURRENT_VERIFICATIONS = '10',

  /**
   * Unsupported Network: The network is not supported for verification.
   */
  UNSUPPORTED_NETWORK = '15',

  /**
   * Code Mismatch: The verification code entered by the user does not match.
   */
  CODE_MISMATCH = '16',

  /**
   * Invalid Code: The verification code provided is invalid.
   */
  INVALID_CODE = '17',

  /**
   * Delivery Failed: The delivery of the verification code failed.
   */
  DELIVERY_FAILED = '19',

  /**
   * PIN Not Supported: PIN verification is not supported.
   */
  PIN_NOT_SUPPORTED = '20',

  /**
   * Non-Permitted Destination: The destination is not permitted for
   * verification.
   */
  NON_PERMITTED_DESTINATION = '29',
}
