import {
  MachineDetectionBehavior,
  AdvancedMachineDetectionMode,
} from '../enums/index';

export type AdvancedMachineDetection = {
  behavior: MachineDetectionBehavior;
  mode: AdvancedMachineDetectionMode;
  beepTimeout?: number;
};
