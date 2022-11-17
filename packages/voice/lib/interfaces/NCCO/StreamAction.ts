export interface StreamAction {
    action: string;
    streamUrl: string[];
    level?: number;
    bargeIn?: boolean;
    loop?: number;
}
