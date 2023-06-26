import { HttpMethod, MachineDetectionBehavior } from '../enums/index';
import { CallEndpoint } from './Endpoint/index';
import { AdvancedMachineDetection } from './AdvancedMachineDetection';
import { CommonCallFields } from './CommonCallFields';

export type CommonOutboundCall = Omit<CommonCallFields, 'to'> & {
  to: Array<CallEndpoint>;
  machineDetection?: MachineDetectionBehavior;
  advancedMachineDetection?: AdvancedMachineDetection;
  lengthTimer?: number;
  ringingTimer?: number;
  eventUrl?: string[];
  eventMethod?: HttpMethod;
};
