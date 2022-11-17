export interface PSD2Request {
    number: string;
    payee: string;
    amount: string;
    country?: string;
    codeLength?: number;
    language?: string;
    pinExpiry?: number;
    nextEventWait?: number;
    workflowId?: number;
}
