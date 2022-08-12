import { AuthOpts, AuthInterface } from '@vonage/auth'
import { VetchResponse, VetchOptions } from '@vonage/vetch'

export type NumbersClassParameters = AuthOpts &
    VetchOptions & {
        auth?: AuthInterface
    }

export interface NumbersResponse<T> extends VetchResponse<T> {}

export interface NumbersAvailableList {
    count?: number
    numbers?: NumbersAvailableNumber[]
}

export interface NumbersOwnedList {
    count?: number
    numbers?: NumbersOwnedNumber[]
}

export interface NumbersEmptyResponse {
    errorCode?: string
    errorCodeLabel?: string
}

export interface NumbersParams {
    country: Country
    msisdn: string
    targetApiKey?: string
}

export interface NumbersQueryParams {
    country: Country
    msisdn: string
    target_api_key?: string
}

export interface NumbersAvailableNumber {
    country?: Country
    msisdn?: string
    type?: string
    cost?: string
    features?: string[]
}

export type Country = string

export interface NumbersUpdateParams {
    country: Country
    msisdn: string
    applicationId?: string
    moHttpUrl?: string
    moSmppSysType?: string
    voiceCallbackType?: VoiceCallbackTypeEnum
    voiceCallbackValue?: string
    voiceStatusCallback?: string
    /** @deprecated */
    messagesCallbackType?: MessagesCallbackTypeEnum
    /** @deprecated */
    messagesCallbackValue?: string
}

export interface NumbersQueryUpdateParams {
    country: Country
    msisdn: string
    app_id?: string
    moHttpUrl?: string
    moSmppSysType?: string
    voiceCallbackType?: VoiceCallbackTypeEnum
    voiceCallbackValue?: string
    voiceStatusCallback?: string
    /** @deprecated */
    messagesCallbackType?: MessagesCallbackTypeEnum
    /** @deprecated */
    messagesCallbackValue?: string
}

export enum VoiceCallbackTypeEnum {
    Sip = 'sip',
    Tel = 'tel',
    App = 'app',
}

export enum MessagesCallbackTypeEnum {
    App = 'app',
}

export interface NumbersOwnedNumber {
    country?: Country
    msisdn?: string
    moHttpUrl?: string
    type?: string
    features?: string[]
    voiceCallbackType?: string
    voiceCallbackValue?: string
    messagesCallbackType?: string
    messagesCallbackValue?: string
}

export interface NumbersSearchFilter {
    country: Country
    pattern?: string
    searchPattern?: number
    size?: number
    index?: number
}

export interface NumbersQuerySearchFilter {
    country: Country
    pattern?: string
    search_pattern?: number
    size?: number
    index?: number
}

export interface NumbersOwnedFilter {
    country?: Country
    applicationId?: string
    hasApplication?: boolean
    pattern?: string
    searchPattern?: number
    size?: number
    index?: number
}

export interface NumbersQueryOwnedFilter {
    country?: Country
    application_id?: string
    has_application?: boolean
    pattern?: string
    search_pattern?: number
    size?: number
    index?: number
}
