import { Message, SendSMSResponse } from '../../types';

export class MessageSendPartialFailure extends Error {
    protected response: SendSMSResponse;

    constructor(message: string, response: SendSMSResponse) {
        super(message);

        Object.setPrototypeOf(this, MessageSendPartialFailure.prototype);
        this.response = response;
    }

    public getFailedMessages(): Message[] {
        const messages = [];
        for (const message in this.response.messages) {
            if (this.response.messages[message].status !== '0') {
                messages.push(this.response.messages[message]);
            }
        }
        return messages;
    }

    public getResponse(): SendSMSResponse {
        return this.response;
    }

    public getSuccessfulMessages(): Message[] {
        const messages = [];
        for (const message in this.response.messages) {
            if (this.response.messages[message].status === '0') {
                messages.push(this.response.messages[message]);
            }
        }
        return messages;
    }
}
