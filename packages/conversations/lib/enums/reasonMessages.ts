/**
 * Enum representing various reasons
 */
export enum ReasonCode {
  /**
   * General failure.
   */
  FAILED = 'failed',

  /**
   * The recipient is currently busy.
   */
  BUSY = 'busy',

  /**
   * Operation timed out.
   */
  TIMEOUT = 'timeout',

  /**
   * The request was cancelled.
   */
  CANCELLED = 'cancelled',

  /**
   * The request was rejected.
   */
  REJECTED = 'rejected',

  /**
   * Operation was successful.
   */
  OK = 'ok',

  /**
   * Resource not found.
   */
  NOT_FOUND = 'not_found',

  /**
   * Request terminated.
   */
  REQUEST_TERMINATED = 'request_terminated',

  /**
   * Bad extension.
   */
  BAD_EXTENSION = 'bad_extension',

  /**
   * Recipient is busy here.
   */
  BUSY_HERE = 'busy_here',

  /**
   * Request timeout.
   */
  REQUEST_TIMEOUT = 'request_timeout',

  /**
   * Temporarily unavailable.
   */
  TEMPORARILY_UNAVAILABLE = 'temporarily_unavailable',

  /**
   * Forbidden access.
   */
  FORBIDDEN = 'forbidden',

  /**
   * Resource has gone away.
   */
  GONE = 'gone',

  /**
   * Bad gateway.
   */
  BAD_GATEWAY = 'bad_gateway',

  /**
   * Address incomplete.
   */
  ADDRESS_INCOMPLETE = 'address_incomplete',

  /**
   * Internal server error.
   */
  SERVER_INTERNAL_ERROR = 'server_internal_error',

  /**
   * Not implemented.
   */
  NOT_IMPLEMENTED = 'not_implemented',

  /**
   * Server timeout.
   */
  SERVER_TIMEOUT = 'server_timeout',

  /**
   * Version not supported.
   */
  VERSION_NOT_SUPPORTED = 'version_not_supported',

  /**
   * Service is unavailable.
   */
  SERVICE_UNAVAILABLE = 'service_unavailable',

  /**
   * Payment is required.
   */
  PAYMENT_REQUIRED = 'payment_required',

  /**
   * Call ended due to being banned.
   */
  BANNED_CALL_ENDED = 'banned_call_ended',

  /**
   * Flow execution failed.
   */
  FLOW_FAILED = 'flow_failed',
};

