declare module 'nexmo' {
    /* general */
    export interface CredentialsObject {
        apiKey: string;
        apiSecret: string;
        applicationId?: string;
        privateKey?: string;
    }

    export interface NexmoApiError {
        body: { [key: string]: any };
        headers?: { [key: string]: any };
    }

    export interface ParserError {
        status: string;
        message: string;
        body: string;
        parseError: Error;
    }

    /* verify API */
    export interface VerifyError extends NexmoApiError {
        status: RequestResponseStatusCode | ControlResponseStatusCode | string;
        error_text: string;
        [key: string]: any;
    }

    export interface RequestObject {
        brand: string;
        number: string;
        sender_id?: string;
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

    type ChannelType = 'sms' | 'viber_service_msg' | 'messenger' | 'whatsapp' | 'mms';

    type ChannelMessageType = 'text' | 'image' | 'audio' | 'video' | 'file' | 'template' | 'custom';

    interface ChannelToFrom {
        // The type of message that you want to send.
        type: ChannelType;
        id?: string;
        /**
         * The phone number of the message recipient in the E.164 format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
         */
        number: string;
    }

    interface ChannelContentImage {
        url: string;
        caption: string;
    }

    interface ChannelContentAudio {
        url: string;
    }

    interface ChannelContentVideo {
        url: string;
    }

    interface ChannelContentFile {
        url: string;
        caption: string;
    }

    interface ChannelContentTemplate {
        name: string;
        parameters: object[];
    }

    interface ChannelContent {
        type: ChannelMessageType;
        text: string;
        image?: ChannelContentImage;
        audio?: ChannelContentAudio;
        video?: ChannelContentVideo;
        file?: ChannelContentFile;
        template?: ChannelContentTemplate;
    }

    interface ChannelViberServiceMsg {
        category?: 'transaction' | 'promotion';
        ttl?: number;
        type?: string;
    }

    interface ChannelMessenger {
        category?: 'response' | 'update' | 'message_tag';
        tag?: string;
    }

    interface ChannelWhatsApp {
        policy?: 'fallback' | 'deterministic';
        locale?: string;
    }

    interface ChannelMessage {
        content: ChannelContent;
        viber_service_msg?: ChannelViberServiceMsg;
        channel?: ChannelMessenger;
        whatsapp?: ChannelWhatsApp;
        client_ref?: string;
    }

    export interface MessageSendResponse {
		message_uuid: string;
    }
    
    export interface MessageSendError {
		type: string;
		title: string;
		detail: string;
		instance: string;
	}

    export class Channel {
        constructor(credentials: CredentialsObject, options: { [key: string]: any });
        static readonly PATH: string;
        send(
            to: ChannelToFrom,
            from: ChannelToFrom,
            message: ChannelMessage,
            callback: (err: MessageSendError, data: MessageSendResponse) => void,
            // This isn't actually present in the code, but _is_ documented by the "getting started" guide:
            // @see https://dashboard.nexmo.com/getting-started/messages
            opts?: { useBasicAuth: boolean }
        );
    }

    /* Nexmo */
    export default class Nexmo {
        constructor(credentials: CredentialsObject, options?: { [key: string]: any });
        public readonly verify: Verify;
        public channel: Channel;
    }
}
