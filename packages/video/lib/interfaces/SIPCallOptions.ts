export interface SIPCallOptions {
    token: string;
    sip: {
        uri: string;
        from?: string;
        headers?: {
            [key: string]: string;
        },
        auth?: {
            username: string;
            password: string;
        }
        secure?: boolean;
        video?: boolean;
        observeForceMute?: boolean;
    }
}
