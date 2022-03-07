import { AuthOpts, AuthInterface } from '@vonage/auth'
import { VetchError, VetchResponse, VetchOptions } from '@vonage/vetch';

export type SMSClassParameters = AuthOpts & VetchOptions & {
    auth?: AuthInterface,
}

export interface SMSResponse<T> extends VetchResponse<T> { }


export interface SMSEmptyResponse {
    errorCode?: string;
    errorCodeLabel?: string;
}

export interface SMSGeneralResponse {
    messageCount?: string;
    messages?: Array<Message>;
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export interface DeliveryReceipt {
    msisdn?: string;
    to?: string;
    networkCode?: string;
    messageId?: string;
    price?: string;
    status?: string;
    scts?: string;
    errCode?: string;
    apiKey?: string;
    clientRef?: string;
    messageTimestamp?: string;
    timestamp?: string;
    nonce?: string;
    sig?: string;
}

export interface ErrorMessage {
    status?: string;
    errorText?: string;
}

export interface ErrorXml {
    messages?: Array<ErrorMessage>;
}

export interface InboundMessage {
    apiKey: string;
    msisdn: string;
    to: string;
    messageId: string;
    text: string;
    type: string;
    keyword: string;
    messageTimestamp: string;
    timestamp?: string;
    nonce?: string;
    concat?: string;
    concatRef?: string;
    concatTotal?: string;
    concatPart?: string;
    data?: Blob;
    udh?: string;
}

export interface Message {
    to?: string;
    messageId?: string;
    status?: string;
    remainingBalance?: string;
    messagePrice?: string;
    network?: string;
    clientRef?: string;
    accountRef?: string;
}

export interface ModelError {
    messageCount?: string;
    messages?: Array<ErrorMessage>;
}

export interface SMSParams {
    from: string;
    to: string;
    text?: string;
    ttl?: number;
    statusReportReq?: boolean;
    callback?: string;
    messageClass?: SMSParams.MessageClassEnum;
    type?: SMSParams.TypeEnum;
    vcard?: string;
    vcal?: string;
    body?: string;
    udh?: string;
    protocolId?: number;
    title?: string;
    url?: string;
    validity?: string;
    clientRef?: string;
    accountRef?: string;
    entityId?: string;
    contentId?: string;
}


export namespace SMSParams {

    export enum MessageClassEnum {
        NUMBER_0 = <any>0,
        NUMBER_1 = <any>1,
        NUMBER_2 = <any>2,
        NUMBER_3 = <any>3
    }

    export enum TypeEnum {
        Text = <any>'text',
        Binary = <any>'binary',
        Wappush = <any>'wappush',
        Unicode = <any>'unicode',
        Vcal = <any>'vcal',
        Vcard = <any>'vcard'
    }
}



export interface SMSXml {
    messages?: Array<Message>;
}