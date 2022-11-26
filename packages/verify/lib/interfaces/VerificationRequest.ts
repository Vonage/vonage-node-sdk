export interface VerificationRequest {
    number: string
    brand: string
    country?: string
    senderId?: string
    codeLength?: number
    language?: string
    pinExpiry?: number
    nextEventWait?: number
    workflowId?: number
}
