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

    /* Nexmo */
    export default class Nexmo {
        constructor(credentials: CredentialsObject, options?: { [key: string]: any });
        public readonly verify: Verify;
    }
}
