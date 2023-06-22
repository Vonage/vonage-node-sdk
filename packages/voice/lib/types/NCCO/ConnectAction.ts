import { CallEndpoint } from '../Endpoint/CallEndpoint';
import { NCCOActions, MachineDetection, ConnectEventType } from '../../enums';

export type ConnectAction = {
  action: NCCOActions.CONNECT;
  eventUrl?: string[];
  eventType?: ConnectEventType;
  from?: string;
  endpoint: Array<CallEndpoint>;
  randomFromNumber?: boolean;
  timeout?: number;
  limit?: number;
  machineDetection?: MachineDetection;
  eventMethod?: string;
  ringbackTone?: string;
};
