import {
    PhoneEndpointObject,
} from '../../interfaces/Endpoint/PhoneEndpointObject';

export class PhoneEndpoint implements PhoneEndpointObject {
    type = 'phone';
    number: string;
    dtmfAnswer?: string;

    constructor(phoneNumber: string, dtmfAnswer?: string) {
        this.number = phoneNumber;

        if (dtmfAnswer) {
            this.dtmfAnswer = dtmfAnswer;
        }
    }
}
