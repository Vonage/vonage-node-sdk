import { VetchResponse, VetchOptions } from '@vonage/vetch';
import { AuditEventTypes } from './enums';
import { APILinks } from '@vonage/server-client';

export type AuditResponse<T> = VetchResponse<T>

export type AuditParams = {
    eventType?: AuditEventTypes
    dateFrom?: string
    dateTo?: string
    searchText?: string
    page?: number
    size?: number
}

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

export interface AuditEventPage {
    size: number
    totalElements: number
    totalPages: number
    number: number
}

export interface AuditEventListResponse {
    _embedded?: {
        events: AuditEvent[]
    }
    _links: APILinks
    page: AuditEventPage
}
