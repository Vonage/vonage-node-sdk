import { ConnectEventType } from "../../enums/NCCO/ConnectEventType";
import { MachineDetection } from "../../enums/NCCO/MachineDetection";
import { ConnectAction } from "../../interfaces/NCCO/ConnectAction";
import { Serializable } from "../../ncco";
import { CallEndpoint } from "../../types/Endpoint/CallEndpoint";

export class Connect implements ConnectAction, Serializable {
    action: 'connect'
    endpoint: CallEndpoint[]
    from?: string
    randomFromNumber?: boolean
    eventType?: ConnectEventType
    timeout?: number
    limit?: number
    machineDetection?: MachineDetection
    eventUrl?: string[]
    eventMethod?: string
    ringbackTone?: string

    constructor(
        endpoint: CallEndpoint,
        from?: string,
        randomFromNumber?: boolean,
        eventType?: ConnectEventType,
        timeout?: number,
        limit?: number,
        machineDetection?: MachineDetection,
        eventUrl?: string,
        eventMethod?: string,
        ringbackTone?: string
    ) {
        this.endpoint = [endpoint];

        if (from) { this.from = from }
        if (randomFromNumber) { this.randomFromNumber = randomFromNumber }
        if (eventType) { this.eventType = eventType }
        if (timeout) { this.timeout = timeout }
        if (limit) { this.limit = limit }
        if (machineDetection) { this.machineDetection = machineDetection }
        if (eventUrl) { this.eventUrl = [eventUrl] }
        if (eventMethod) { this.eventMethod = eventMethod }
        if (ringbackTone) { this.ringbackTone = ringbackTone }
    }

    serializeToNCCO() {
        let data: ConnectAction = {
            action: this.action,
            endpoint: this.endpoint
        }

        if (this.from) { data.from = this.from }
        if (this.randomFromNumber) { data.randomFromNumber = this.randomFromNumber }
        if (this.eventType) { data.eventType = this.eventType }
        if (this.timeout) { data.timeout = this.timeout }
        if (this.limit) { data.limit = this.limit }
        if (this.machineDetection) { data.machineDetection = this.machineDetection }
        if (this.eventUrl) { data.eventUrl = this.eventUrl }
        if (this.eventMethod) { data.eventMethod = this.eventMethod }
        if (this.ringbackTone) { data.ringbackTone = this.ringbackTone }

        return data;
    }
}