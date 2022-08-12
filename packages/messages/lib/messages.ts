import { Client } from '@vonage/server-client'
import { MessageObject } from './interfaces/MessageObject'
import { MessagesSendResponse } from './types'

const stripUndefined = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = stripUndefined(obj[key])
        } else if (!obj[key]) {
            delete obj[key]
        }
    }

    return obj
}

export class Messages extends Client {
    /**
     * Handle various ways the Messages API handles auth
     * The Messages API handles both JWT (preferred) as well as Basic so we
     * cannot just set a local authType
     */
    public addAuthenticationToRequest(request: any) {
        if (this.auth.applicationId && this.auth.privateKey) {
            request.headers = Object.assign({}, request.headers, {
                Authorization: this.auth.createBearerHeader(),
            })
        } else if (this.auth.signature) {
            request.data = Object.assign(
                request.data,
                this.auth.createSignatureHash(request.data)
            )
        } else {
            request.data = Object.assign(
                request.data,
                this.auth.getQueryParams(request.data)
            )
        }

        return request
    }

    public async send(message: MessageObject) {
        const data = stripUndefined(message)
        const resp = await this.sendPostRequest<MessagesSendResponse>(
            `${this.config.apiHost}/v1/messages`,
            data
        )
        return resp.data
    }
}
