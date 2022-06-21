import { PhoneEndpointObject } from "../../interfaces/Endpoint/PhoneEndpointObject"

export class PhoneEndpoint implements PhoneEndpointObject {
    type: string = 'phone'
    number: string
    dtmfAnswer?: string

    constructor(number: string, dtmfAnswer?: string) {
        this.number = number

        if (dtmfAnswer) { this.dtmfAnswer = dtmfAnswer }
    }
}