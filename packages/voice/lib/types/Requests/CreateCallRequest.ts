import { OutboundCall } from '../OutboundCall';
import { AdvancedMachineDetection } from '../AdvancedMachineDetection';
import { MachineDetection } from '../../enums';

/**
 * Represents the request payload for creating a call, including various call settings.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CreateCallRequest = {
  /**
   * Specifies whether to use a random caller number for the call.
   */
  random_from_number?: boolean;

  /**
   * An array of URLs for event callbacks during the call's lifecycle.
   */
  event_url?: Array<string>;

  /**
   * The type of machine detection to use for the call.
   */
  machine_detection?: MachineDetection;

  /**
   * Advanced machine detection settings, including beep timeout.
   */
  advanced_machine_detection: {
    /**
     * The beep timeout setting for advanced machine detection.
     */
    beep_timeout?: number;
  } & Omit<AdvancedMachineDetection, 'beepTimeout'>;

  /**
   * The length timer setting for the call.
   */
  length_timer?: number;

  /**
   * The ringing timer setting for the call.
   */
  ringing_timer?: number;
} & Omit<
  OutboundCall,
  | 'randomFromNumber'
  | 'eventUrl'
  | 'machineDetection'
  | 'advancedMachineDetection'
  | 'lengthTimer'
  | 'ringingTimer'
>;
