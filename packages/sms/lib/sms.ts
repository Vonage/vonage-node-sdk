import { Client } from '@vonage/server-client'
import { MessageSendAllFailure } from './classes/Error/MessageSendAllFailure'
import { MessageSendPartialFailure } from './classes/Error/MessageSendPartialFailure'
import { SMSParams, SendSMSResponse, Message } from './types'

export class SMS extends Client {
    public async send(params?: SMSParams): Promise<SendSMSResponse> {
        const resp = await this.sendPostRequest<SendSMSResponse>(
            `${this.config.restHost}/sms/json`,
            params
        )

        let failures: number = 0
        const messageCount: number = parseInt(resp.data['message-count'], 10)
        const messageData: SendSMSResponse = {
            messageCount,
            'message-count': resp.data['message-count'],
            messages: [],
        }
        for (const element of resp.data.messages) {
            const message: Message = element
            if (element['message-id']) {
                message.messageId = element['message-id']
            }
            if (element['remaining-balance']) {
                message.remainingBalance = element['remaining-balance']
            }
            if (element['message-price']) {
                message.messagePrice = element['message-price']
            }
            if (element['client-ref']) {
                message.clientRef = element['client-ref']
            }
            if (element['account-ref']) {
                message.accountRef = element['account-ref']
            }
            messageData.messages.push(message)
        }

        for (let i = 0; i < messageCount; i++) {
            if (messageData.messages[i].status !== '0') {
                failures++
            }
        }

        if (failures === messageCount) {
            throw new MessageSendAllFailure(
                'All SMS messages failed to send',
                messageData
            )
        }

        if (failures > 0) {
            throw new MessageSendPartialFailure(
                'Some SMS messages failed to send',
                messageData
            )
        }

        return messageData
    }
}
