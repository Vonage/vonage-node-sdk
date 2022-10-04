import { SendSMSResponse } from '../../types'

export class MessageSendAllFailure extends Error {
    protected response: SendSMSResponse

    constructor(message: string, response: SendSMSResponse) {
        super(message)

        Object.setPrototypeOf(this, MessageSendAllFailure.prototype)
        this.response = response
    }

    public getResponse(): SendSMSResponse {
        return this.response
    }
}
