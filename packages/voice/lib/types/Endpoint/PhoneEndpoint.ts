/**
 * Represents a phone endpoint, which can be used as a call destination.
 */
export type PhoneEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'phone' for phone numbers.
   */
  type: 'phone';

  /**
   * The phone number associated with the endpoint.
   */
  number: string;
};
