import { AuditEventTypes } from '../enums';

export type AuditParams = {
    eventType?: AuditEventTypes
    dateFrom?: string
    dateTo?: string
    searchText?: string
    page?: number
    size?: number
}
