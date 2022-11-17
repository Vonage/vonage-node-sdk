export interface AccountUpdateResponse {
    'mo-callback-url': string;
    'dr-callback-url': string;
    'max-outbound-request': number;
    'max-inbound-request': number;
    'max-calls-per-second': number;
}
