import { AuthOpts, AuthInterface } from '@vonage/auth'
import { VetchError, VetchResponse, VetchOptions } from '@vonage/vetch';

export type NumbersClassParameters = AuthOpts & VetchOptions & {
    auth?: AuthInterface,
}

export type NumbersResponse<T> = NumbersSuccess<T> | NumbersError;

export type NumbersSuccess<T> = VetchResponse & {
    type: 'success';
    data: T
}

export type NumbersError = VetchError & {
    type: 'error';
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

export interface NumbersAvailableListResponse {
    count?: number;
    numbers?: Array<NumbersAvailableNumber>;
}


export interface NumbersOwnedListResponse {
    count?: number;
    numbers?: Array<NumbersOwnedNumber>;
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


