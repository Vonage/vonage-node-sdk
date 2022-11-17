export interface TalkAction {
    action: string;
    text: string;
    bargeIn?: boolean;
    loop?: number;
    level?: number;
    language?: string;
    style?: string;
    premium?: boolean;
}
