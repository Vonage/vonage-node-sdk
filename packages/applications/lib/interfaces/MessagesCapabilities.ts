export interface MessagesCapabilities {
    webhooks: {
        inbound_url?: {
            address?: string;
            http_method?: string;
        };
        status_url?: {
            address?: string;
            http_method?: string;
        };
    };
}
