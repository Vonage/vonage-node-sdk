import { SyncStatus } from '../enums/listSyncStatus';

export type ListSyncStatus = {
    value: SyncStatus
    metadataModified: boolean
    dataModified: boolean
    dirty: boolean
    details?: string
}
