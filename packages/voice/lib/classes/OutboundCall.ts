import { PhoneEndpointObject } from '@vonage/voice';
import { CallEndpoint } from '../types';
import debug from 'debug';
import { HttpMethod, MachineDetectionBehavior } from '../enums';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the CommonOutboundCall type',
);

/**
 * Represents an outbound call.
 *
 * @deprecated This class is deprecated. Please update to use the CommonOutboundCall type
 */
export abstract class OutboundCall {
  /**
   * The list of call endpoints to which the outbound call will be made.
   */
  to: Array<CallEndpoint>;

  /**
   * The phone endpoint object representing the caller's information.
   */
  from?: PhoneEndpointObject;

  /**
   * Indicates whether to use a random from number (optional).
   */
  randomFromNumber?: boolean;

  /**
   * The list of event URLs (optional).
   */
  eventUrl?: string[];

  /**
   * The HTTP method to use for event notifications (optional).
   */
  eventMethod?: HttpMethod;

  /**
   * The machine detection behavior (optional).
   */
  machineDetection?: MachineDetectionBehavior;

  /**
   * The length timer for the call (optional).
   */
  lengthTimer?: number;

  /**
   * The ringing timer for the call (optional).
   */
  ringingTimer?: number;

  /**
   * Creates a new outbound call.
   *
   * @param {CallEndpoint} to - The call endpoint to which the outbound call will be made.
   * @param {PhoneEndpointObject} [from] - The phone endpoint object representing the caller's information.
   */
  constructor(to: CallEndpoint, from?: PhoneEndpointObject) {
    this.to = [to];

    this.from = from;
  }
}
