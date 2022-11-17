import { CallEndpointObject } from './CallEndpointObject';

export interface PhoneEndpointObject extends CallEndpointObject {
    number: string;
    dtmfAnswer?: string;
}
