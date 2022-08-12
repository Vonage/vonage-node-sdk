import { AuthInterface, AuthOpts } from '@vonage/auth'
import { VetchOptions, VetchResponse } from '@vonage/vetch'

export interface VoiceResponse<T> extends VetchResponse<T> {}

export type VoiceClassParameters = AuthOpts &
    VetchOptions & {
        applicationId: string
        privateKey: string
        auth?: AuthInterface
    }

export interface CallDetailResponse {
    _links: {
        self: {
            href: string
        }
    }
    uuid: string
    conversation_uuid: string
    to: {
        type: string
        number: string
    }
    from: {
        type: string
        number: string
    }
    status: string
    direction: string
    rate: string
    price: string
    duration: string
    start_time: string
    end_time: string
    network: string
}

export interface CallListResponse {
    count: number
    page_size: number
    record_index: number
    _links: {
        self: {
            href: string
        }
    }
    _embedded: {
        calls: CallDetailResponse[]
    }
}

export interface CallListFilter {
    status?: string
    dateStart?: string
    dateEnd?: string
    pageSize?: number
    recordIndex?: number
    order?: string
    conversationUUID?: string
}

export interface CallCreateResponse {
    uuid: string
    status: string
    direction: string
    conversation_uuid: string
}

export interface CallModifyResponse {
    message: string
    uuid: string
}
