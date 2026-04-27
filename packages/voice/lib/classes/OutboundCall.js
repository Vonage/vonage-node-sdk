import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the CommonOutboundCall type'
);

/* istanbul ignore next */
/**
 * Represents an outbound call.
 *
 * @deprecated This class is deprecated. Please update to use the CommonOutboundCall type
 */
export class OutboundCall {
  /**
   * The list of call endpoints to which the outbound call will be made.
   */
  to;

  /**
   * The phone endpoint object representing the caller's information.
   */
  from;

  /**
   * Indicates whether to use a random from number (optional).
   */
  randomFromNumber;

  /**
   * The list of event URLs (optional).
   */
  eventUrl;

  /**
   * The HTTP method to use for event notifications (optional).
   */
  eventMethod;

  /**
   * The machine detection behavior (optional).
   */
  machineDetection;

  /**
   * The length timer for the call (optional).
   */
  lengthTimer;

  /**
   * The ringing timer for the call (optional).
   */
  ringingTimer;

  /**
   * Creates a new outbound call.
   *
   * @param {CallEndpoint} to - The call endpoint to which the outbound call will be made.
   * @param {PhoneEndpointObject} [from] - The phone endpoint object representing the caller's information.
   */
  constructor(to, from) {
    this.to = [to];

    this.from = from;
  }
}
