import { VerifyRequest } from './VerifyRequest';

/**
 * Represents an error response for a Verify operation with additional
 * error-related properties.
 */
export type VerifyError = VerifyRequest & {
  /**
   * The error text providing more information about the error.
   */
  error_text: string;

  /**
   * The error text providing more information about the error
   */
  errorText: string;

  /**
   * (Optional) The network associated with the error.
   */
  network?: string;
}
