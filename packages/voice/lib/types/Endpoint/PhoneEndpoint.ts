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

  /**
   * Provide DTMF digits to send when the call is answered
   */
  dtmfAnswer?: string;

//  onAnswer?: {
//    /**
//     * The URL serves an NCCO to execute in the number being connected to,
//     * before that call is joined to your existing conversation
//     */
//    url: string;
//
//    /**
//     * The ringbackTone key can be specified with a URL value that points to a
//     * ringbackTone to be played back on repeat to the caller, so they do not
//     * hear just silence.
//     */
//    ringbackTone?: string;
//
//    /**
//     * @deprecated Use `ringbackTone` instead.
//     */
//    ringback?: string;
//
//  };
} & Record<string, unknown>;
