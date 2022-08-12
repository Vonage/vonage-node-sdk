import { Client } from '@vonage/server-client'
import { SMSParams, SendSMSResponse } from './types'

export class SMS extends Client {
    public async send(params?: SMSParams): Promise<SendSMSResponse> {
        const resp = await this.sendPostRequest<SendSMSResponse>(
            `${this.config.restHost}/sms/json`,
            params
        )
        return resp.data
    }
}
