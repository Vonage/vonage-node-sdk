import { VerificationRequest } from "../interfaces/VerificationRequest";

export class Verification implements VerificationRequest {
    number: string
    country?: string
    senderId?: string
    codeLength?: number
    language?: string
    pinExpiry?: number
    nextEventWait?: number
    workflowId?: number

    constructor(number: string, country?: string, senderId?: string, codeLength?: number, language?: string, pinExpiry?: number, nextEventWait?: number, workflowId?: number) {
        this.number = number

        if (country) { this.country = country }
        if (senderId) { this.senderId = senderId }
        if (codeLength) { this.codeLength = codeLength }
        if (language) { this.language = language }
        if (pinExpiry) { this.pinExpiry = pinExpiry }
        if (nextEventWait) { this.nextEventWait = nextEventWait }
        if (workflowId) { this.workflowId = workflowId }
    }
}