/**
 * Represents a PSTN (Public Switched Telephone Network) endpoint, which can be used as a call destination.
 */
export type PSTNEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'phone' for phone numbers.
   */
  type: 'phone';

  /**
   * The phone number associated with the endpoint.
   */
  number: string;

  /**
   * An optional DTMF (Dual-Tone Multi-Frequency) answer string. When provided,
   * it enables automated call answering by sending DTMF tones.
   */
  dtmfAnswer?: string;
};
