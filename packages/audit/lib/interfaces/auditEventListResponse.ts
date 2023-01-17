import { APILinks } from '@vonage/server-client';
import { AuditEvent } from '../types/auditEvent';
import { AuditEventPage } from './auditEventPage';

export interface AuditEventListResponse {
    _embedded?: {
        events: AuditEvent[]
    }
    _links: APILinks
    page: AuditEventPage
}
