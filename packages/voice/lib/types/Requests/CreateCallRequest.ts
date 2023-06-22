import { OutboundCall } from '../OutboundCall';
import { MachineDetection } from '../../enums';

export type CreateCallRequest = {
  random_from_number?: boolean;
  event_url?: Array<string>;
  machine_detection?: MachineDetection;
  length_timer?: number;
  ringing_timer?: number;
} & Omit<
  OutboundCall,
  | 'randomFromNumber'
  | 'eventUrl'
  | 'machineDetection'
  | 'lengthTimer'
  | 'ringingTimer'
>;
