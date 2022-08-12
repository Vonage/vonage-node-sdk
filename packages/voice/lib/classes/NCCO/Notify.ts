import { NotifyAction } from '../../interfaces/NCCO/Notify'
import { Serializable } from '../../ncco'

export class Notify implements NotifyAction, Serializable {
    action: 'notify'
    payload: {
        [key: string]: string
    }
    eventUrl: string[]
    eventMethod?: string

    constructor(
        payload: { [key: string]: string },
        eventUrl: string,
        eventMethod?: string
    ) {
        this.payload = payload
        this.eventUrl = [eventUrl]

        if (eventMethod) {
            this.eventMethod = eventMethod
        }
    }

    serializeToNCCO() {
        const data: NotifyAction = {
            action: this.action,
            payload: this.payload,
            eventUrl: this.eventUrl,
        }

        if (this.eventMethod) {
            data.eventMethod = this.eventMethod
        }

        return data
    }
}
