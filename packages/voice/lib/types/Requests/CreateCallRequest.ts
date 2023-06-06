import { OutboundCall } from '../OutboundCall';
import { AdvancedMachineDetection } from '../AdvancedMachineDetection';
import { MachineDetection } from '../../enums';

export type CreateCallRequest = {
  random_from_number?: boolean;
  event_url?: Array<string>;
  machine_detection?: MachineDetection;
  advanced_machine_detection: {
    beep_timeout?: number;
  } & Omit<AdvancedMachineDetection, 'beepTimeout'>;
  length_timer?: number;
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
