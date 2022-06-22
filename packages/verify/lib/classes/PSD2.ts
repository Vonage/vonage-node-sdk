import { PSD2Request } from "../interfaces/PSD2Request";

export class PSD2 implements PSD2Request {
    number: string
    payee: string
    amount: string
    country?: string
    codeLength?: number
    language?: string
    pinExpiry?: number
    nextEventWait?: number
    workflowId?: number

    constructor(number: string, payee: string, amount: string, country?: string, codeLength?: number, language?: string, pinExpiry?: number, nextEventWait?: number, workflowId?: number) {
        this.number = number

        if (country) { this.country = country }
        if (payee) { this.payee = payee }
        if (amount) { this.amount = amount }
        if (codeLength) { this.codeLength = codeLength }
        if (language) { this.language = language }
        if (pinExpiry) { this.pinExpiry = pinExpiry }
        if (nextEventWait) { this.nextEventWait = nextEventWait }
        if (workflowId) { this.workflowId = workflowId }
    }
}