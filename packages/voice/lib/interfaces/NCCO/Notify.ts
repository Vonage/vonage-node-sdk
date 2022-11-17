export interface NotifyAction {
    action: string;
    payload: {
        [key: string]: string
    };
    eventUrl: string[];
    eventMethod?: string;
}
