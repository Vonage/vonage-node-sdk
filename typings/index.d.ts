/*
 * TOOD: add prefix for Verify api's typings like Message api on next major update.
 *       RequestObject -> VerifyRequestObject
 *       RequestResponse -> VerifyRequestResponse
 *       RequestResponseStatusCode -> VerifyRequestResponseStatusCode
 *       ControlObject -> VerifyControlObject
 *       ControlResponse -> VerifyControlResponse
 *       ControlResponseStatusCode -> VerifyControlResponseStatusCode
 *       CheckObject -> VerifyCheckObject
 *       CheckResponse -> VerifyCheckResponse
 */

declare module '@vonage/server-sdk' {
    /* general */
    export interface CredentialsObject {
        apiKey: string;
        apiSecret: string;
        applicationId?: string;
        privateKey?: string;
    }

    export interface VonageApiError {
      body: { [key: string]: any };
      headers?: { [key: string]: any };
    }

    export interface ParserError {
        status: string;
        message: string;
        body: string;
        parseError: Error;
    }

    /* message API */
    export enum MessageRequestResponseStatusCode {
        Success = '0',
        Throttled = '1',
        MissingParameters = '2',
        InvalidParameters = '3',
        InvalidCredentials = '4',
        InternalError = '5',
        InvalidMessage = '6',
        NumberBarred = '7',
        PartnerAccountBarred = '8',
        PartnerQuotaViolation = '9',
        TooManyExistingBinds = '10',
        AccountNotEnabledForHTTP = '11',
        MessageTooLong = '12',
        InvalidSignature = '14',
        InvalidToAddress = '15',
        InvalidNetworkCode = '22',
        InvalidCallbackURL = '23',
        NonWhitelistedDestination = '29',
        SignatureAndAPISecretDisallowed = '32',
        NumberDeActivated = '33',
    }

    export interface MessageRequestResponseSuccess {
        to: string,
        'message-id': string,
        status: MessageRequestResponseStatusCode,
        'remaining-balance': string,
        'message-price': string,
        'network': string,
        'account-ref': string,
    }

    export interface MessageError {
        status: MessageRequestResponseStatusCode;
        'error-text': string;
    }
    
    export interface MessageRequestResponse {
      'message-count': number;
      messages: (MessageRequestResponseSuccess | MessageError)[];
    }
    
    export interface SendSmsOptions {
        from: string;
        to: string;
        text?: string;
        sig?: string;
        ttl?: number;
        'status-report-req'?: boolean;
        callback?: string;
        'message-class'?: number;
        type?: string;
        vcard?: string | any;
        vcal?: string | any;
        body?: string;
        udh?: string;
        'protocol-id'?: number;
        title?: string;
        url?: string;
        validity?: string;
        'client-ref'?: string;
        'account-ref'?: string;
    }
    
    export type SendSms = (
      To: string,
      recipient: string,
      message: string,
      opts: Partial<SendSmsOptions>,
      callback: (err: MessageError, data: MessageRequestResponse) => void
    ) => void;
    
    export class Message {
        constructor(credentials: CredentialsObject, options: { [key: string]: any });
        sendSms: SendSms;

        /**
         * TODO: typing
         */
        sendBinaryMessage: any;
        sendWapPushMessage: any;
        shortcodeAlert: any;
        shortcode2FA: any;
        shortcodeMarketing: any;
        search: any;
        searchRejections: any;
      
        __proto__: any;
        [key: string]: any;
    }

    /* verify API */
    export interface VerifyError extends VonageApiError {
        status: RequestResponseStatusCode | ControlResponseStatusCode | string;
        error_text: string;
        [key: string]: any;
    }

    export interface RequestObject {
        brand: string;
        number: string;
        To_id?: string;
        country?: string;
        code_length?: number;
        lg?: string;
        require_type?: string;
        pin_expiry?: number;
        next_event_wait?: number;
        workflow_id?: number;
    }

    export interface RequestResponse {
        request_id: string;
        status: string;
    }

    export enum RequestResponseStatusCode {
        Success = "0",
        Throttled = "1",
        MissingParameters = "2",
        InvalidCredentials = "3",
        InternalError = "4",
        NotProcessed = "5",
        BlackListedNumber = "6",
        BlockedAccount = "7",
        QuotaExceeded = "8",
        ConcurrentVerificationNumber = "9",
        TargetNetworkNotSupported = "10",
        WrongVerificationCode = "11",
        TooManyRequests = "12",
        NoMoreEvents = "13",
        NoRequestFound = "14",
    }

    export interface ControlObject {
        request_id: string;
        cmd: string;
    }

    export interface ControlResponse {
        status: string;
        command: string;
    }

    export enum ControlResponseStatusCode {
        Success = "0",
        CancelOrTriggerNextEvent = "19",
    }

    export interface CheckObject {
        request_id: string;
        code: string;
        ip_address?: string;
    }

    export interface CheckResponse {
        request_id: string;
        event_id: string;
        status: string;
        price: string;
        currency: string;
    }

    export class Verify {
        constructor(credentials: CredentialsObject, options: { [key: string]: any });
        request(request: RequestObject, callback: (err: VerifyError, data: RequestResponse) => void): void;
        control(request: ControlObject, callback: (err: VerifyError, data: ControlResponse) => void): void;
        check(request: CheckObject, callback: (err: VerifyError, data: CheckResponse) => void): void;
        __proto__: any;
        [key: string]: any;
    }

    /* voice API */
    export interface To{
        type: string;
        number: string;
        dtmfAnswer?: string;
    }
    
    export interface From{
        type: string;
        number: string;
    }

    export interface CallsResponse {
        count: number;
        page_size: number;
        record_index: number;
        _links: CallDetailLinks;
        _embedded: CallDetailEmbedded;
    }
    
    export interface CallDetailLinks {
        self: CallDetailsSelf;
    }
    
    export interface CallDetailsSelf {
        href: string;
    }
    
    export interface CallDetailEmbedded {
        calls: CallDetailCall[];
    }
    
    export interface CallDetailCall {
        _links: CallDetailLinks;
        uuid: string;
        conversation_uuid: string;
        to: To;
        from: From;
        status: string;
        direction: string;
        rate: string;
        price: string;
        duration: string;
        start_time: Date;
        end_time: Date;
        network: string;
    }

    export interface OutboundCallRequest{
        answer_url?: string[];
        ncco?: Ncco[];
        status: string;
        to: To[];
        from: From;
        event_url: string[];
        machine_detection: string;
    }
    
    export interface Ncco {
        action: string;
        text: string;
    }
    
    export interface OutboundCallResponse{
        uuid: string;
        status: string;
        direction: string;
        conversation_uuid: string;
    }

    export interface CallDetailResponse {
        _links: CallDetailLinks;
        uuid: string;
        conversation_uuid: string;
        to: To;
        from: From;
        status: string;
        direction: string;
        rate: string;
        price: string;
        duration: string;
        start_time: Date;
        end_time: Date;
        network: string;
    }

    export interface InProgressCallRequest {
        action: string;
        destination?: Destination;
    }

    export interface Destination {
        type: string;
        ncco?: Ncco[]; 
        url?: string[];
    }

    export interface StreamAudioInCallRequest {
        stream_url: string[];
        level?: string;
    }
    
    export interface ModifyInProgressCallResponse {
        message: string;
        uuid: string;
    }

    export interface TextToSpeechRequest {
        text: string;
        level?: string;
    }
    
    export interface DTMFRequest {
        digits: number;
    }

    export class Voice {
        constructor(credentials: CredentialsObject, options: { [key: string]: any });
        sendTTSMessage(recipient: To, message: TextToSpeechRequest, options: CredentialsObject, callback: (data: ModifyInProgressCallResponse) => void ): void;
        sendTTSPromptWithCapture(recipient: To, message: TextToSpeechRequest, maxDigits: Number, callback: (data: ModifyInProgressCallResponse) => void ): void;
        sendTTSPromptWithConfirm(recipient: To, message: TextToSpeechRequest, maxDigits: Number, pinCode: string, byeText: string, failedText: string, callback: (data: ModifyInProgressCallResponse) => void ): void;
        call(recipient: To, answerUrl: string, opts: OutboundCallRequest, callback: (data: OutboundCallResponse) => void): void;
        __proto__: any;
        [key: string]: any;
    }

    /* Vonage */
    export default class Vonage {
        constructor(credentials: CredentialsObject, options?: { [key: string]: any });
        public readonly verify: Verify;
        public readonly message: Message;
        public readonly voice: Voice;
    }
}
