/**
 * Direction of a communication event relative to Vonage's services.
 */
export enum Direction {
  /**
   * The communication was received by Vonage's services
   * (e.g. an inbound call or message).
   */
  INBOUND = 'inbound',

  /**
   * The communication originated from Vonage's services
   * (e.g. an outbound call or message).
   */
  OUTBOUND = 'outbound',
}
