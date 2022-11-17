import { Client } from '@vonage/server-client';
import { MessageSendAllFailure } from './classes/Error/MessageSendAllFailure';
import {
    MessageSendPartialFailure,
} from './classes/Error/MessageSendPartialFailure';
import { SendSMSResponse, SMSParams } from './types';

export class SMS extends Client {
    public async send(params?: SMSParams): Promise<SendSMSResponse> {
        const resp = await this.sendPostRequest<SendSMSResponse>(
            `${this.config.restHost}/sms/json`,
            params,
        );

        let failures = 0;
        const messageCount: number = parseInt(resp.data['message-count'], 10);
        for (let i = 0; i < messageCount; i++) {
            if (resp.data.messages[i].status !== '0') {
                failures++;
            }
        }

        if (failures === messageCount) {
            throw new MessageSendAllFailure(
                'All SMS messages failed to send',
                resp.data,
            );
        }

        if (failures > 0) {
            throw new MessageSendPartialFailure(
                'Some SMS messages failed to send',
                resp.data,
            );
        }

        return resp.data;
    }
}
