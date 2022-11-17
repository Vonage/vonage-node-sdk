export interface RTCCapabilities {
    webhooks: {
        event_url?: {
            address?: string;
            http_method?: string;
        };
    };
}
