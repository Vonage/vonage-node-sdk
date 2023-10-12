/**
 * Type representing an asynchronous advanced response from a phone number lookup operation.
 * This response may include additional details about the request and its status.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type AsyncAdvancedResponse = {
  /**
   * The unique identifier for the request.
   */
  request_id: string;

  /**
   * The phone number associated with the response.
   */
  number: string;

  /**
   * Your account balance in EUR after this request.
   */
  remaining_balance: string;

  /**
   * The amount in EUR charged to your account for this request.
   */
  request_price: string;

  /**
   * The status code of the response.
   */
  status: number;

  /**
   * Any error text or message associated with the response.
   */
  error_text: string;
};
