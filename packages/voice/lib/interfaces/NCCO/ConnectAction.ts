import { ConnectEventType } from '../../enums/NCCO/ConnectEventType';
import { MachineDetection } from '../../enums/NCCO/MachineDetection';
import { CallEndpoint } from '../../types/Endpoint/CallEndpoint';

export interface ConnectAction {
    action: string;
    endpoint: CallEndpoint[];
    from?: string;
    randomFromNumber?: boolean;
    eventType?: ConnectEventType;
    timeout?: number;
    limit?: number;
    machineDetection?: MachineDetection;
    eventUrl?: string[];
    eventMethod?: string;
    ringbackTone?: string;
}
