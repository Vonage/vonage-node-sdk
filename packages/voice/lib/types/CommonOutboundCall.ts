import { HttpMethod, MachineDetectionBehavior } from '../enums/index.js';
import { CallEndpoint } from './Endpoint/index.js';
import { AdvancedMachineDetection } from './AdvancedMachineDetection.js';
import { CommonCallFields } from './CommonCallFields.js';

/**
 * Represents common fields for defining an outbound call, including the caller (from) and recipient (to) endpoints,
 * along with additional call parameters.
 */
export type CommonOutboundCall = Omit<CommonCallFields, 'to'> & {
  /**
   * An array of recipient endpoints for the call.
   */
  to: Array<CallEndpoint>;

  /**
   * Specifies the behavior for machine detection during the call.
   */
  machineDetection?: MachineDetectionBehavior;

  /**
   * Advanced machine detection settings for the call.
   */
  advancedMachineDetection?: AdvancedMachineDetection;

  /**
   * The length of time to wait for call answer, in seconds.
   */
  lengthTimer?: number;

  /**
   * The length of time to wait for the call to ring before considering it unanswered, in seconds.
   */
  ringingTimer?: number;

  /**
   * An array of URLs to notify with call events.
   */
  eventUrl?: string[];

  /**
   * The HTTP method to use when sending events to the specified event URLs.
   */
  eventMethod?: HttpMethod;
};
