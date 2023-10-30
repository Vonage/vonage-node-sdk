/**
 * Represents an error response received when sending a message.
 *
 * This type includes information about the error type, title, details, and an instance identifier.
 *
 * If applicable, it may also contain information about invalid parameters that caused the error.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @group Responses
 */
type MessageErrorResponse = {
  /** The type of the error. */
  type: string;
  /** A title or brief description of the error. */
  title: string;
  /** Additional details about the error. */
  detail: string;
  /** An instance identifier for reference. */
  instance: string;
  /** Optional: Invalid parameters that contributed to the error. */
  invalid_parameters?: {
    /** The name of the invalid parameter. */
    name: string;
    /** The reason or explanation for the parameter's invalidity. */
    reason: string;
  };
};

export default MessageErrorResponse;
