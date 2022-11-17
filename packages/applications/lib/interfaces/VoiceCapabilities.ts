export interface VoiceCapabilities {
    webhooks: {
        answer_url?: {
            address?: string;
            http_method?: string;
            connection_timeout?: number;
            socket_timeout?: number;
        };
        fallback_answer_url?: {
            address?: string;
            http_method?: string;
            connection_timeout?: number;
            socket_timeout?: number;
        };
        event_url?: {
            address?: string;
            http_method?: string;
            connection_timeout?: number;
            socket_timeout?: number;
        };
    };
    payment_enabled?: boolean;
    signed_callbacks?: boolean;
    payments?: {
        gateways: any;
    };
}
