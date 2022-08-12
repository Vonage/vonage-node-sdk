import { Client } from '@vonage/server-client'
import { Command } from './enums/Command'
import { PSD2Request } from './interfaces/PSD2Request'
import { VerifyCheckResponse } from './interfaces/Response/VerifyCheckResponse'
import { VerifyControlResponse } from './interfaces/Response/VerifyControlResponse'
import { VerifySearchResponse } from './interfaces/Response/VerifySearchResponse'
import { VerificationRequest } from './interfaces/VerificationRequest'

export class Verify extends Client {
    public async cancel(requestId: string): Promise<VerifyControlResponse> {
        const data = {
            request_id: requestId,
            cmd: Command.CANCEL,
        }

        const resp = await this.sendPostRequest<VerifyControlResponse>(
            `${this.config.apiHost}/verify/control/json`,
            data
        )
        return resp.data
    }

    public async check(
        requestId: string,
        code: string
    ): Promise<VerifyCheckResponse> {
        const data = {
            request_id: requestId,
            code,
        }

        const resp = await this.sendPostRequest<VerifyCheckResponse>(
            `${this.config.apiHost}/verify/check/json`,
            data
        )
        return resp.data
    }

    public async search(requestId: string): Promise<VerifySearchResponse> {
        const resp = await this.sendGetRequest<VerifySearchResponse>(
            `${this.config.apiHost}/verify/search/json`,
            { request_id: requestId }
        )

        return resp.data
    }

    public async start(
        request: VerificationRequest | PSD2Request
    ): Promise<VerifyCheckResponse> {
        let url = ''
        if ('payee' in request) {
            url = `${this.config.apiHost}/verify/psd2/json`
        } else {
            url = `${this.config.apiHost}/verify/json`
        }

        const resp = await this.sendPostRequest<VerifyCheckResponse>(
            url,
            request
        )
        return resp.data
    }

    public async trigger(requestId: string) {
        const data = {
            request_id: requestId,
            cmd: Command.TRIGGER_NEXT_EVENT,
        }

        const resp = await this.sendPostRequest<VerifyControlResponse>(
            `${this.config.apiHost}/verify/control/json`,
            data
        )
        return resp.data
    }
}
