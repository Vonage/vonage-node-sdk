import { AuditEventTypes } from '../enums';

export type AuditEvent = {
    id: string
    eventType: AuditEventTypes
    createdAt: string
    userEmail?: string
    userId?: string
    accountId: string
    source: string
    sourceDescription: string
    sourceCountry: string
    context?: object
}
