import { AuthOpts, AuthInterface } from '@vonage/auth'
import { VetchError, VetchResponse, VetchOptions } from '@vonage/vetch';

export type NumbersClassParameters = AuthOpts & VetchOptions & {
    auth?: AuthInterface,
}

export type NumbersPromise<T, E> = Promise<T | E>
export const NumbersPromise = Promise;

export type NumbersError = VetchError & {
    type?: 'error',
    response: NumbersEmptyResponse & {
        data: {
            errorCode?: string;
            errorCodeLabel?: string;
        }
    }
}

export type NumbersResponse = VetchResponse;

export type NumbersAvailableListResponse = NumbersResponse & {
    type?: 'success'
    data: {
        count?: number;
        numbers?: Array<NumbersAvailableNumber>;
    }
}

export type NumbersOwnedListResponse = NumbersResponse & {
    type?: 'success'
    data: {
        count?: number;
        numbers?: Array<NumbersOwnedNumber>;
    }
}

export type NumbersOwnedNumberResponse = NumbersResponse & {
    type?: 'success'
    data: NumbersOwnedNumber
}

export type NumbersEmptyResponse = NumbersResponse & {
    type?: 'success'
    data: {
        errorCode?: string;
        errorCodeLabel?: string;
    }
}

export interface NumbersParams {
    country: Country;
    msisdn: string;
    targetApiKey?: string;
}

export interface NumbersAvailableNumber {
    country?: Country;
    msisdn?: string;
    type?: string;
    cost?: string;
    features?: Array<string>;
}

export type Country = string

export interface NumbersUpdateParams {
    country: Country;
    msisdn: string;
    appId?: string;
    moHttpUrl?: string;
    moSmppSysType?: string;
    voiceCallbackType?: VoiceCallbackTypeEnum;
    voiceCallbackValue?: string;
    voiceStatusCallback?: string;
    /** @deprecated */
    messagesCallbackType?: MessagesCallbackTypeEnum;
    /** @deprecated */
    messagesCallbackValue?: string;
}

export enum VoiceCallbackTypeEnum {
    Sip = <any>'sip',
    Tel = <any>'tel',
    App = <any>'app'
}

export enum MessagesCallbackTypeEnum {
    App = <any>'app'
}

export interface NumbersOwnedNumber {
    country?: Country;
    msisdn?: string;
    moHttpUrl?: string;
    type?: string;
    features?: Array<string>;
    voiceCallbackType?: string;
    voiceCallbackValue?: string;
    messagesCallbackType?: string;
    messagesCallbackValue?: string;
}

export interface NumbersSearchFilter {
    country: Country,
    pattern?: string,
    searchPattern?: number,
    size?: number,
    index?: number,
}

export interface NumbersOwnedFilter {
    country?: Country,
    applicationId?: string,
    hasApplication?: boolean,
    pattern?: string,
    searchPattern?: number,
    size?: number,
    index?: number,
}


