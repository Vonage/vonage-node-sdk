import { CallEndpoint } from '../types';
import { PhoneEndpointObject } from './Endpoint/PhoneEndpointObject';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the OutboundCall type',
);

/**
 * Represents an outbound call configuration.
 * @deprecated This interface is deprecated. Please update to use the OutboundCall type.
 */
export interface OutboundCall {
  /**
   * The call's destination(s).
   */
  to: CallEndpoint[];

  /**
   * The caller's phone number or endpoint.
   */
  from?: PhoneEndpointObject;

  /**
   * Indicates whether to use a random caller's phone number.
   */
  randomFromNumber?: boolean;

  /**
   * URLs to receive call events.
   */
  eventUrl?: string[];

  /**
   * The HTTP method used to send events to the event URLs.
   */
  eventMethod?: string;

  /**
   * Whether machine detection should be enabled for the call.
   * @deprecated Machine detection behavior should be set separately using `machineDetection` property.
   */
  machineDetection?: boolean;

  /**
   * The length of time to wait for a call answer, in seconds.
   */
  lengthTimer?: number;

  /**
   * The length of time to ring before assuming a no-answer, in seconds.
   */
  ringingTimer?: number;
}
