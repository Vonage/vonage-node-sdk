export interface ConversationAction {
    action: string;
    name: string;
    musicOnHoldUrl?: string[];
    startOnEnter?: boolean;
    endOnExit?: boolean;
    record?: boolean;
    canSpeak?: string[];
    canHear?: string[];
    mute?: boolean;
}
